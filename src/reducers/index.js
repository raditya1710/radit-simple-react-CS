import { combineReducers } from 'redux';
import ReducerUsers from './reducer_users';

const rootReducer = combineReducers({
  users: ReducerUsers
});

export default rootReducer;
