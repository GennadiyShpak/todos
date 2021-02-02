import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todos from './todos/todo-reducers';

const rootReducers = combineReducers({ todos });

const store = createStore(rootReducers, composeWithDevTools());

export default store;
