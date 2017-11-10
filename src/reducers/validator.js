import * as ActionType from '../actions';


/**
 * Warning Numbers Only
 * @param {*} action action from actions/index.
 */

const reducerNumbers = (state = null, action) => {
  if (action.type === ActionType.NUMBERS_ONLY) {
    return action.payload;
  }
  return state;
};

/**
 * Warning Text Only
 * @param {*} action action from actions/index.
 */

const reducerText = (state = null, action) => {
  if (action.type === ActionType.TEXT_ONLY) {
    return action.payload;
  }
  return state;
};


/**
 * Strict Numbers Only
 * @param {*} action action from actions/index.
 */

const reducerStrictText = (state = '', action) => {
  if (action.type === ActionType.STRICT_TEXT_ONLY) {
    return action.payload;
  }
  return state;
};


export {
  reducerText, reducerNumbers, reducerStrictText,
};

