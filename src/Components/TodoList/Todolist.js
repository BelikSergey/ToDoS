import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.css'


const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoListItem', {
          'TodoListItem--completed': completed,
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