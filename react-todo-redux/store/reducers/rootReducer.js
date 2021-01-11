import { combineReducers } from 'redux';
import { statsReducer } from './statsReducer';
import todos from './todosReducer';

export default combineReducers({ todos, stats: statsReducer });
