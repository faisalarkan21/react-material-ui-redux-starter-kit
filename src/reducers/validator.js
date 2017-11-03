
import * as ActionType from '../actions';
import { errorMessage, filterRegex } from '../middleware/rules';

function onlyText(value) {
  if (value === '') {
    return errorMessage('notNull');
  } else if (!filterRegex.String.test(value)) {
    return errorMessage('onlyString');
  }
  return null;
}

export default function (state = null, action) {
  if (action.type === ActionType.ONLY_TEXT) {
    return onlyText(action.payload);
  }
  return state;
}

