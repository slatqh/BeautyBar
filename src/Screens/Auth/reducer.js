const initialState = {
  user: null,
  isLoggin: false,
  loading: false,
  error: '',
};

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload, isLoggin: true, error: '' };
    case SIGNUP_FAILED:
      return { ...state, loading: false, error: action.payload, isLoggin: false };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, isLoggin: true, error: '' };
    case LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload, isLoggin: false };
    default:
      return state;
  }
};
