import * as types from '../actions';

const initialState = {
  user: JSON.parse(localStorage.getItem('howToUser')) || {},
  error: null,
  signingUp: false,
  loggingIn: false,
};

export function authReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...initialState, 
        user: action.payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    case types.SIGNING_UP:
      return {
        ...initialState,
        user: {...state.user},
        signingUp: true,
      };
    case types.LOGGING_IN:
      return {
        ...initialState,
        user: {...state.user},
        loggingIn: true,
      };
    default:
      return state;
  }
}
