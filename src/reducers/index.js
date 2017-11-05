import { combineReducers } from 'redux';

import { reducerText, reducerNumbers } from './validator';

const allReducers = combineReducers({
  errorMessageText: reducerText,
  errorMessageNumbers: reducerNumbers,
});

export default allReducers;
