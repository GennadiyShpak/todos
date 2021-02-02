import { useDispatch } from 'react-redux';

import todosActions from '../../redux/todos-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = ({ target }) =>
    dispatch(todosActions.filterTodo(target.value));

  return (
    <input
      onChange={onFilter}
      type="text"
      placeholder="Enter filter value..."
    />
  );
};

export default Filter;
