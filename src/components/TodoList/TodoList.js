import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoListFilters } from '../TodoListFilters';
import { TodoItem } from '../TodoItem';
import { filteredTodoListState } from '../../atoms';
import { TodoItemCreator } from '../TodoItemCreator';


export const TodoList = () => {
  // useRecoilValue hook allow us to consume an atom state (or derived state) inside of a component
  const list = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoItemCreator />
      {list.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};