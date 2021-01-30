import shortid from 'shortid';

const addTodo = text => ({
  type: 'todos/addTodo',
  payload: { header: text.header, text: text.text, id: shortid.generate() },
});
const deleteTodo = id => ({
  type: 'todos/deleteTodo',
  payload: id,
});

const todosActions = { addTodo, deleteTodo };
export default todosActions;
