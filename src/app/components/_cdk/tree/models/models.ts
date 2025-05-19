import { Observable } from "rxjs";

export interface BackendData {
  id: string;
  name: string;
  parent?: string;
  children?: string[];
}

export type LoadingState = 'INIT' | 'LOADING' | 'LOADED';

export interface RawData {
  id: string;
  name: string;
  parentId?: string;
  childrenIds?: string[];
  childrenLoading: LoadingState;
}

export interface State {
  rootIds: string[];
  rootsLoading: LoadingState;
  allData: Map<string, RawData>;
  dataLoading: Map<string, LoadingState>;
}

export type ObservedValueOf<T> = T extends Observable<infer U> ? U : never;

export type ObservedValuesOf<T extends readonly Observable<unknown>[]> = {
  [K in keyof T]: ObservedValueOf<T[K]>;
};

export type TransformFn<T extends readonly Observable<unknown>[], U> = (
  ...args: [...ObservedValuesOf<T>, State]
) => U;


export class TransformedData {
  constructor(public raw: RawData) {}

  areChildrenLoading() {
    return this.raw.childrenLoading === 'LOADING';
  }

  isExpandable() {
    return (
      (this.raw.childrenLoading === 'INIT' || this.raw.childrenLoading === 'LOADED') &&
      !!this.raw.childrenIds?.length
    );
  }

  isLeaf() {
    return !this.isExpandable() && !this.areChildrenLoading();
  }
}