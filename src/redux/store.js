import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todos from './todos-reducers';

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
