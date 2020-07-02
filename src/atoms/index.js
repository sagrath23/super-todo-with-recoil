import { atom } from 'recoil';

// an atom is the "source of truth" for the app (as state in redux)
export const todoListState = atom({
  key: 'todoListState',
  default: []
});