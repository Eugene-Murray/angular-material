import { BackendData } from "../models/models";

export const EXAMPLE_DATA = new Map<string, BackendData>(
  [
    {
      id: '1',
      name: 'Fruit',
      children: ['1-1', '1-2', '1-3'],
    },
    {id: '1-1', name: 'Apple', parent: '1'},
    {id: '1-2', name: 'Banana', parent: '1'},
    {id: '1-3', name: 'Fruit Loops', parent: '1'},
    {
      id: '2',
      name: 'Vegetables',
      children: ['2-1', '2-2'],
    },
    {
      id: '2-1',
      name: 'Green',
      parent: '2',
      children: ['2-1-1', '2-1-2'],
    },
    {
      id: '2-2',
      name: 'Orange',
      parent: '2',
      children: ['2-2-1', '2-2-2'],
    },
    {id: '2-1-1', name: 'Broccoli', parent: '2-1'},
    {id: '2-1-2', name: 'Brussel sprouts', parent: '2-1'},
    {id: '2-2-1', name: 'Pumpkins', parent: '2-2'},
    {id: '2-2-2', name: 'Carrots', parent: '2-2'},
  ].map(datum => [datum.id, datum]),
);