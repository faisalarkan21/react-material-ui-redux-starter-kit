

export const TEXT_ONLY = 'TEXT_ONLY';
export const NUMBERS_ONLY = 'NUMBERS_ONLY';

export const textCheck = event => ({
  type: TEXT_ONLY,
  payload: event.target.value,
});

export const numbersCheck = event => ({
  type: NUMBERS_ONLY,
  payload: event.target.value,
});

