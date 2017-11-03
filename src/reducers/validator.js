
import * as ActionType from '../actions';
import { messageError, filterRegex } from '../middleware/rules';

function onlyText(value) {
  if (value === '') {
    return messageError('notNull');
  } else if (!filterRegex.String.test(value)) {
    return messageError('onlyString');
  }
  return null;
}

export default function (state = null, action) {
  if (action.type === ActionType.ONLY_TEXT) {
    return onlyText(action.payload);
  }
  return state;
}

