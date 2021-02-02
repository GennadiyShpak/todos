import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import todosActions from '../../redux/todos/todo-actions';
import s from './Form.module.css';

const Form = ({ onClose }) => {
  const [todo, setTodo] = useState({ header: '', text: '' });
  const dispatch = useDispatch();
  const onSubmit = useCallback(text => dispatch(todosActions.addTodo(text)), [
    dispatch,
  ]);
  const onCgangeHandler = ({ target }) => {
    const { name, value } = target;
    setTodo({ ...todo, [name]: value });
  };
  const onSubmitHandler = e => {
    const { header, text } = todo;
    e.preventDefault();

    if (header === '' || text === '') {
      alert('Some field are empty');
      return;
    } else {
      onSubmit(todo);
      onClose();
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className={s.form}>
      <input
        placeholder="Enter header todo..."
        type="text"
        onChange={onCgangeHandler}
        name="header"
      />
      <textarea
        className={s.textarea}
        placeholder="Enter description todo..."
        type="text"
        onChange={onCgangeHandler}
        name="text"
      />
      <button type="submit" className={s.submitButton}>
        Create todo
      </button>
    </form>
  );
};
export default Form;
