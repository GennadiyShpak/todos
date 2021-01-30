import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import s from './TodoItem.module.css';
import todosActions from '../../redux/todos-actions';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDelete = useCallback(id => dispatch(todosActions.deleteTodo(id)), [
    dispatch,
  ]);
  const { id, header, text } = item;
  return (
    <li className={s.todo}>
      <h2>{header}</h2>
      <p className={s.textArea}>{text}</p>
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
