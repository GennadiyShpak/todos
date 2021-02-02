import { useSelector } from 'react-redux';

import { getTodos, getFiltredName } from '../../redux/todos/todo-selectors';
import TodoItem from '../TodoItem/TodoItem';

import s from './TodosView.module.css';

const TodosView = () => {
  const todos = useSelector(getTodos);
  console.log(todos);
  return (
    <ul className={s.todoList}>
      {todos.map(item => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default TodosView;
