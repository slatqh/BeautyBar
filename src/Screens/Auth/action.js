import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,
  UPDATING_PROFILE,
  PROFILE_UPDATED_FAILED,
  PROFILE_UPDATED_SUCCESS,
}
  from './reducer';
import { User } from '../../../api/User';

// user signup
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

// user login
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
      payload: error.response.data.message,
    });
  };
}

// user logout
export function userLogout(){
  return async dispatch => {
    dispatch({ type: USER_LOGOUT})
    try {
      const data = await User.signOut()
      if(data.success){
        dispatch({ type: USER_LOGOUT_SUCCESS })
      }
    } catch (error) {
      throw new error
    }
  }
}

// user profile update

export function updateProfile(args){
  return async dispatch => {
    dispatch({ type: UPDATING_PROFILE})
    try {
      const data = await User.profileUpdate(args)
      return dispatch(profileUpdatedSuccess(data, dispatch))
    } catch (error) {
      return dispatch(profileUpdateFailed(error, dispatch))
    }
  }
}


function profileUpdatedSuccess(data, dispatch){
   return dispatch({
     type: PROFILE_UPDATED_SUCCESS,
     payload: data,
   })
}
function profileUpdateFailed(error, dispatch){
   return dispatch({
     type: PROFILE_UPDATED_FAILED,
     payload: error,
   })
}