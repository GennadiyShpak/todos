import shortid from 'shortid';

const addTodo = text => ({
  type: 'todos/addTodo',
  payload: { header: text.header, text: text.text, id: shortid.generate() },
});

const deleteTodo = id => ({
  type: 'todos/deleteTodo',
  payload: id,
});

const filterTodo = text => ({
  type: 'todos/filterTodo',
  payload: text,
});

const todosActions = { addTodo, deleteTodo, filterTodo };
export default todosActions;
