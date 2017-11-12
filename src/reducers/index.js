import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducerCheck } from './validator';

const allReducers = combineReducers({
  reducerCheck,
  form: formReducer,
});

export default allReducers;
