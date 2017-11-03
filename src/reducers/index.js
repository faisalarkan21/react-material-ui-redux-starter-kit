import { combineReducers } from 'redux';
import userReducer from './user-reducers';
import ActiveUserReducer from './reducer-active-user';
import ruleValidator from './validator';

const allReducers = combineReducers({

  users: userReducer,
  activeUser: ActiveUserReducer,
  messageError: ruleValidator,

});


export default allReducers;
