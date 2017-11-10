import { errorMessage, filterRegex } from '../middleware/rulesValidator';


export const TEXT_ONLY = 'TEXT_ONLY';
export const NUMBERS_ONLY = 'NUMBERS_ONLY';
export const STRICT_TEXT_ONLY = 'STRICT_TEXT_ONLY';

export const textCheck = event => ({
  type: TEXT_ONLY,
  payload: event.target.value,
});

export const numbersCheck = event => ({
  type: NUMBERS_ONLY,
  payload: event.target.value,
});


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

