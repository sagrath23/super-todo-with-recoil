import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ item: { text, isComplete } }) => (
  <div>
      <input type="text" value={text} onChange={() => {}} />
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => {}}
      />
      <button onClick={() => {}}>X</button>
    </div>
);

TodoItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
  })
};
