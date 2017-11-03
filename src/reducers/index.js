import { combineReducers } from 'redux';

import ruleValidator from './validator';

const allReducers = combineReducers({


  errorMessage: ruleValidator,

});


export default allReducers;
