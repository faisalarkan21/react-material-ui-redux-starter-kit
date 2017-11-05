
import * as ActionType from '../actions';
import { errorMessage, filterRegex } from '../middleware/rulesValidator';

function onlyText(value) {
  if (value === '') {
    return errorMessage('notNull');
  } else if (!filterRegex.String.test(value)) {
    return errorMessage('onlyString');
  }
  return null;
}

function onlyNumbers(value) {
  if (value === '') {
    return errorMessage('notNull');
  } else if (!filterRegex.Number.test(value)) {
    return errorMessage('onlyNumber');
  }
  return null;
}


const reducerText = (state = null, action) => {
  if (action.type === ActionType.TEXT_ONLY) {
    return onlyText(action.payload);
  }
  return state;
};


const reducerNumbers = (state = null, action) => {
  if (action.type === ActionType.NUMBERS_ONLY) {
    return onlyNumbers(action.payload);
  }
  return state;
};

export {
  reducerText, reducerNumbers,
};

