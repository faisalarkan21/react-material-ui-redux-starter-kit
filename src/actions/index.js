import { customMessage, filterRegex } from '../middleware/rulesValidator';


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
    dispatch(textCheck(customMessage.statusNull));
  } else if (!filterRegex.String.test(getText)) {
    dispatch(textCheck(customMessage.statusStringError));
  } else {
    dispatch(textCheck(''));
  }
  return null;
};


/**
 * Warning Only Number
 * @param {*} value from onlyNumberCheck
 */

export const onlyNumbers = value => ({
  type: NUMBERS_ONLY,
  payload: value,
});


export const onlyNumbersCheck = event => (dispatch) => {
  const getNumbers = event.target.value;
  if (getNumbers.length === 0) {
    dispatch(onlyNumbers(customMessage.statusNull));
  } else if (!filterRegex.Number.test(getNumbers)) {
    dispatch(onlyNumbers(customMessage.statusNumError));
  } else {
    dispatch(onlyNumbers(''));
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
  const { strictText } = getState();

  if (getText.length === 0) {
    dispatch(getStrictText(''));
  } else if (filterRegex.String.test(getText)) {
    dispatch(getStrictText(getText));
  } else if (!filterRegex.String.test(getText)) {
    dispatch(getStrictText(strictText));
  }
};

