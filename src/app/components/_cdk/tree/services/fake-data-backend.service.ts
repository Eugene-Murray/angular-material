import { Injectable } from '@angular/core';
import { BackendData } from '../models/models';
import { delay, Observable, of } from 'rxjs';
import { EXAMPLE_DATA } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class FakeDataBackendService {

  private _getRandomDelayTime() {
    // anywhere from 100 to 500ms.
    return Math.floor(Math.random() * 400) + 100;
  }

  getChildren(id: string): Observable<BackendData[]> {
    // first, find the specified ID in our tree
    const item = EXAMPLE_DATA.get(id);
    const children = item?.children ?? [];

    return of(children.map(childId => EXAMPLE_DATA.get(childId)!)).pipe(
      delay(this._getRandomDelayTime()),
    );
  }

  getRoots(): Observable<BackendData[]> {
    return of([...EXAMPLE_DATA.values()].filter(datum => !datum.parent)).pipe(
      delay(this._getRandomDelayTime()),
    );
  }
}
