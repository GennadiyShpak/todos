import { useSelector } from 'react-redux';

import { getState } from '../../redux/todos-selectors';
import TodoItem from '../TodoItem/TodoItem';

import s from './TodosView.module.css';

const TodosView = () => {
  const todos = useSelector(getState);
  return (
    <ul className={s.todoList}>
      {todos.map(item => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default TodosView;
