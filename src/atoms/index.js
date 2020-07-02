import { atom, selector } from 'recoil';

// an atom is the "source of truth" for the app (as state in redux)
export const todoListState = atom({
  key: 'todoListState',
  default: []
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch(filter) {
      case 'Show Completed': 
        return list.filter(({ isCompleted }) => isCompleted);
      case 'Show Uncompleted':
        return list.filter(({ isCompleted }) => !isCompleted);
      default:
        return list;
    }
  }
});
