

export const ONLY_TEXT = 'ONLY_TEXT';

export const rulesValidator = event => ({
  type: ONLY_TEXT,
  payload: event.target.value,
});

