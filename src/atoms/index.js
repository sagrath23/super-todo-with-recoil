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
        return list.filter(({ isComplete }) => isComplete);
      case 'Show Uncompleted':
        return list.filter(({ isComplete }) => !isComplete);
      default:
        return list;
    }
  }
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const list = get(todoListState);
    const totalItems = list.length;
    const totalItemsCompleted = list.filter(({ isComplete }) => isComplete).length;
    const totalItemsUncompleted = list.filter(({ isComplete }) => !isComplete).length;
    const completionPercent = totalItems === 0 ? 0 : totalItemsCompleted / totalItems;

    return {
      totalItems,
      totalItemsCompleted,
      totalItemsUncompleted,
      completionPercent
    };
  }
})
