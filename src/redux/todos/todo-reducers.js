import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'todos/addTodo':
      return [...state, payload];

    case 'todos/deleteTodo':
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (store = '', actons) => store;

const todos = combineReducers({ items, filter });

export default todos;
