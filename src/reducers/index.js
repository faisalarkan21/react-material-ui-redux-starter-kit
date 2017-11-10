import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducerText, reducerNumbers, reducerStrictText } from './validator';

const allReducers = combineReducers({
  errorMessageText: reducerText,
  errorMessageNumbers: reducerNumbers,
  strictText: reducerStrictText,
  form: formReducer,
});

export default allReducers;
