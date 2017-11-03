

export const USER_SELECTED = 'USER_SELECTED';
export const ONLY_TEXT = 'ONLY_TEXT';


export const selectedUser = value => ({
  type: USER_SELECTED,
  payload: value,
});


export const rulesValidator = event => ({
  type: ONLY_TEXT,
  payload: event.target.value,
});

