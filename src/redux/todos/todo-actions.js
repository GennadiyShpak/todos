import shortid from 'shortid';

const addTodo = todo => ({
  type: 'todos/addTodo',
  payload: { header: todo.header, text: todo.text, id: shortid.generate() },
});

const deleteTodo = id => ({
  type: 'todos/deleteTodo',
  payload: id,
});

const todosActions = { addTodo, deleteTodo };
export default todosActions;
