import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import s from './TodoItem.module.css';
import todosActions from '../../redux/todos/todo-actions';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDelete = useCallback(id => dispatch(todosActions.deleteTodo(id)), [
    dispatch,
  ]);
  const { id, header, text } = item;
  return (
    <li className={s.todo}>
      <h2 className={s.todoTitle}>{header}</h2>
      <span className={s.textArea}>{text}</span>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete todo
      </button>
    </li>
  );
};

export default TodoItem;
