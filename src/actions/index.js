import { parseMessage, filterRegex } from '../middleware/rulesValidator';


export const TEXT_ONLY = 'TEXT_ONLY';
export const NUMBERS_ONLY = 'NUMBERS_ONLY';
export const STRICT_TEXT_ONLY = 'STRICT_TEXT_ONLY';


/**
 * Warning Only Text
 * @param {*} value from onlyTextCheck
 */

export const textCheck = value => ({
  type: TEXT_ONLY,
  payload: value,
});

export const onlyTextCheck = event => (dispatch) => {
  const getText = event.target.value;
  if (getText.length === 0) {
    dispatch(textCheck(parseMessage('nullError', true)));
  } else if (!filterRegex.String.test(getText)) {
    dispatch(textCheck(parseMessage('stringError', true)));
  } else {
    dispatch(textCheck(''));
  }
  return null;
};


/**
 * Warning Only Number
 * @param {*} value from onlyNumberCheck
 */

export const checkNumbers = value => ({
  type: NUMBERS_ONLY,
  payload: value,
});


export const onlyNumbersCheck = event => (dispatch) => {
  const getNumbers = event.target.value;
  if (getNumbers.length === 0) {
    dispatch(checkNumbers(parseMessage('nullError', true)));
  } else if (!filterRegex.Number.test(getNumbers)) {
    dispatch(checkNumbers(parseMessage('numberError', true)));
  } else {
    dispatch(checkNumbers(''));
  }
  return null;
};


/**
 * Strict Text Only
 * @param {*} value from strictTextCheck
 */

export const getStrictText = value => ({
  type: STRICT_TEXT_ONLY,
  payload: value,
});


export const strictTextCheck = event => (dispatch, getState) => {
  const getText = event.target.value;
  const { reducerCheck: { strictText } } = getState();

  if (getText.length === 0) {
    dispatch(getStrictText({ strictText: '' }));
  } else if (filterRegex.String.test(getText)) {
    dispatch(getStrictText({ strictText: getText }));
  } else if (!filterRegex.String.test(getText)) {
    dispatch(getStrictText({ strictText }));
  }
};

