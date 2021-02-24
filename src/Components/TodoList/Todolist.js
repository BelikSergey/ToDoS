import React from 'react';
import PropTypes from 'prop-types'

import Todo from '../Todo';


const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string,
            text: PropTypes.string,
            completed: PropTypes.bool,
        }),
    ),
    onDeleteTodo: PropTypes.func,
    onToggleCompleted: PropTypes.func,
}


export default TodoList;