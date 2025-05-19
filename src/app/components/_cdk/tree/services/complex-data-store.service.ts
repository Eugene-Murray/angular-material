import { inject, Injectable } from '@angular/core';
import { FakeDataBackendService } from './fake-data-backend.service';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay } from 'rxjs';
import { BackendData, ObservedValuesOf, RawData, State, TransformedData, TransformFn } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ComplexDataStoreService {
private readonly _backend = inject(FakeDataBackendService);

  private _state = new BehaviorSubject<State>({
    rootIds: [],
    rootsLoading: 'INIT',
    allData: new Map(),
    dataLoading: new Map(),
  });

  private readonly _rootIds = this.select((state: { rootIds: any; }) => state.rootIds);
  private readonly _allData = this.select((state: { allData: any; }) => state.allData);
  private readonly _loadingData = this.select((state: { dataLoading: any; }) => state.dataLoading);
  private readonly _rootsLoadingState = this.select((state: { rootsLoading: any; }) => state.rootsLoading);
  readonly areRootsLoading = this.select(
    this._rootIds,
    this._loadingData,
    this._rootsLoadingState,
    (rootIds: any[], loading: { get: (arg0: any) => string; }, rootsLoading: string) =>
      rootsLoading !== 'LOADED' || rootIds.some(id => loading.get(id) !== 'LOADED'),
  );
  readonly roots = this.select(
    this.areRootsLoading,
    this._rootIds,
    this._allData,
    (rootsLoading: any, rootIds: string[], data: Map<string, RawData>) => {
      if (rootsLoading) {
        return [];
      }
      return this._getDataByIds(rootIds, data);
    },
  );

  getChildren(parentId: string) {
    return this.select(this._allData, this._loadingData, (data: Map<string, RawData>, loading: { get: (arg0: any) => string; }) => {
      const parentData = data.get(parentId);
      if (parentData?.childrenLoading !== 'LOADED') {
        return [];
      }
      const childIds = parentData.childrenIds ?? [];
      if (childIds.some(id => loading.get(id) !== 'LOADED')) {
        return [];
      }
      return this._getDataByIds(childIds, data);
    });
  }

  loadRoots() {
    this._setRootsLoading();
    this._backend.getRoots().subscribe((roots: BackendData[]) => {
      this._setRoots(roots);
    });
  }

  loadChildren(parentId: string) {
    this._setChildrenLoading(parentId);
    this._backend.getChildren(parentId).subscribe((children: BackendData[]) => {
      this._addLoadedData(parentId, children);
    });
  }

  private _setRootsLoading() {
    this._state.next({
      ...this._state.value,
      rootsLoading: 'LOADING',
    });
  }

  private _setRoots(roots: BackendData[]) {
    const currentState = this._state.value;

    this._state.next({
      ...currentState,
      rootIds: roots.map(root => root.id),
      rootsLoading: 'LOADED',
      ...this._addData(currentState, roots),
    });
  }

  private _setChildrenLoading(parentId: string) {
    const currentState = this._state.value;
    const parentData = currentState.allData.get(parentId);

    this._state.next({
      ...currentState,
      allData: new Map([
        ...currentState.allData,
        ...(parentData ? ([[parentId, {...parentData, childrenLoading: 'LOADING'}]] as const) : []),
      ]),
      dataLoading: new Map([
        ...currentState.dataLoading,
        ...(parentData?.childrenIds?.map(childId => [childId, 'LOADING'] as const) ?? []),
      ]),
    });
  }

  private _addLoadedData(parentId: string, childData: BackendData[]) {
    const currentState = this._state.value;

    this._state.next({
      ...currentState,
      ...this._addData(currentState, childData, parentId),
    });
  }

  private _addData(
    {allData, dataLoading}: State,
    data: BackendData[],
    parentId?: string,
  ): Pick<State, 'allData' | 'dataLoading'> {
    const parentData = parentId && allData.get(parentId);
    const allChildren = data.flatMap(datum => datum.children ?? []);
    return {
      allData: new Map([
        ...allData,
        ...data.map(datum => {
          return [
            datum.id,
            {
              id: datum.id,
              name: datum.name,
              parentId,
              childrenIds: datum.children,
              childrenLoading: 'INIT',
            },
          ] as const;
        }),
        ...(parentData ? ([[parentId, {...parentData, childrenLoading: 'LOADED'}]] as const) : []),
      ]),
      dataLoading: new Map([
        ...dataLoading,
        ...data.map(datum => [datum.id, 'LOADED'] as const),
        ...allChildren.map(childId => [childId, 'INIT'] as const),
      ]),
    };
  }

  private _getDataByIds(ids: string[], data: State['allData']) {
    return ids
      .map(id => data.get(id))
      .filter(<T>(item: T | undefined): item is T => !!item)
      .map(datum => new TransformedData(datum));
  }

  select<T extends readonly Observable<unknown>[], U>(
    ...sourcesAndTransform: [...T, TransformFn<T, U>]
  ) {
    const sources = sourcesAndTransform.slice(0, -1) as unknown as T;
    const transformFn = sourcesAndTransform[sourcesAndTransform.length - 1] as TransformFn<T, U>;

    return combineLatest([...sources, this._state]).pipe(
      map(args => transformFn(...(args as unknown as [...ObservedValuesOf<T>, State]))),
      shareReplay({refCount: true, bufferSize: 1}),
    );
  }
}
