import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoItem } from '../TodoItem';
import { todoListState } from '../../atoms';
import { TodoItemCreator } from '../TodoItemCreator';


export const TodoList = () => {
  // useRecoilValue hook allow us to consume an atom state inside of a component
  const list = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {list.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};