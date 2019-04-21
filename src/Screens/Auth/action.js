import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
}
  from './reducer';
import { User } from '../../../api/User';

export function signUp(args) {
  return async dispatch => {
    dispatch({ type: SIGNUP });
    try {
      const data = await User.signUp(args);
      dispatch(signUpSuccess(data));
    } catch (error) {
      return dispatch(signUpFailed(error));
    }
  };
}

function signUpSuccess(data) {
  return dispatch => {
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  };
}
function signUpFailed() {
  return {
    type: SIGNUP_FAILED,
    payload: 'SIGN UP FAILED',
  };
}
export function login(args) {
  return async dispatch => {
    dispatch({ type: LOGIN });
    try {
      const data = await User.login(args);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };
}

function loginSuccess(data) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  };
}
function loginFailed(error) {
  return dispatch => {
    dispatch({
      type: LOGIN_FAILED,
      payload: error,
    });
  };
}
