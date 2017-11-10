import { combineReducers } from 'redux';

import { reducerText, reducerNumbers, reducerStrictText } from './validator';

const allReducers = combineReducers({
  errorMessageText: reducerText,
  errorMessageNumbers: reducerNumbers,
  strictText: reducerStrictText,
});

export default allReducers;
