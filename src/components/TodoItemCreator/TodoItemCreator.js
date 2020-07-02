import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms';

export const TodoItemCreator = () => {
  // use useState hook to provide an state in a function component
  const [inputValue, setInputValue] = useState('');
  // and use useSetRecoilState hook to provide a way to update the atom's state with the new item
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getNewId(),
        text: inputValue,
        isComplete: false
      }
    ]);
  };
  const onChange = ({target: {value}}) => setInputValue(value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
const getNewId = () => {
  return id++;
};
