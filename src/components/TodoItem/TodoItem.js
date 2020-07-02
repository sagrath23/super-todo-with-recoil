import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../atoms';

export const TodoItem = ({ item: { id, text, isComplete } }) => {
  // useRecoilState hook allow us to consume an atom state in read / write mode
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((item) => item.id === id);
  const editItemText = ({ target: { value }}) => {
    const modifiedItem = {
      id,
      text: value,
      isComplete
    };
    const newList = replaceItemAtIndex(todoList, index, modifiedItem);

    setTodoList(newList);
  };
  const toggleItemCompletion = () => {
    const modifiedItem = {
      id,
      text,
      isComplete: !isComplete
    };
    const newList = replaceItemAtIndex(todoList, index, modifiedItem);

    setTodoList(newList);
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  }

  return (
    <div>
      <input type="text" value={text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
  })
};

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
