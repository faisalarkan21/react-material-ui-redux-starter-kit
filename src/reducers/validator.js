import * as ActionType from '../actions';

const initialState =
  {
    errorMessageText: '',
    errorStatusText: false,
    errorMessageNumbers: '',
    errorStatusNumber: false,
    strictText: '',
  };

const reducerCheck = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.NUMBERS_ONLY:
      return {
        ...state,
        errorMessageNumbers: action.payload.message,
        errorStatusNumber: action.payload.isError,
      };
    case ActionType.TEXT_ONLY:
      return {
        ...state,
        errorMessageText: action.payload.message,
        errorStatusText: action.payload.isError,
      };
    case ActionType.STRICT_TEXT_ONLY:
      return {
        ...state,
        strictText: action.payload.strictText,
      };
    default:
      return state;
  }
};


export {
  reducerCheck,
};

