const initialState = {
  user: null,
  isLoggin: false,
  loading: false,
  error: false,
  errorMessage: null
};

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';
export const UPDATING_PROFILE = 'UPDATING_PROFILE';
export const PROFILE_UPDATED_SUCCESS = 'PROFILE_UPDATED_SUCCESS';
export const PROFILE_UPDATE_FAILED = 'PROFILE_UPDATE_FAILED';

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload, isLoggin: true,  };
    case SIGNUP_FAILED:
      return { ...state, loading: false, errorMessage: action.payload, error: true,  isLoggin: false };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, isLoggin: true, error: false };
    case LOGIN_FAILED:
      return { ...state, loading: false, errorMessage: action.payload, isLoggin: false, error: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, isLoggin: false, loading: false };
    case UPDATING_PROFILE:
      return { ...state, loading: true };
    case PROFILE_UPDATED_SUCCESS:
      return { ...state, loading: false, user: action.payload, isLoggin: true, };
    case PROFILE_UPDATE_FAILED:
      return { ...state, errorMessage: action.payload, error: true, loading: false };

    default:
      return state;
  }
};
