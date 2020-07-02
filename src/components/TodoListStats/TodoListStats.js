import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../atoms';

export const TodoListStats = () => {
  const test = useRecoilValue(todoListStatsState);
  const {
    totalItems,
    totalItemsCompleted,
    totalItemsUncompleted,
    completionPercent
  } = test;
  const formattedCompletionPercent = Math.round(completionPercent * 100);

  return (
    <ul>
      <li>Total items: {totalItems}</li>
      <li>Items completed: {totalItemsCompleted}</li>
      <li>Items not completed: {totalItemsUncompleted}</li>
      <li>Percent completed: {formattedCompletionPercent}</li>
    </ul>
  );
};