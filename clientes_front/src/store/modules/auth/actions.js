export const Types = {
  LOGIN_REQUEST: "@auth/LOGIN_REQUEST",
  LOGIN_SUCCESS: "@auth/LOGIN_SUCCESS",
  LOGIN_FAILURE: "@auth/LOGIN_FAILURE",
  LOGOUT_REQUEST: "@auth/LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "@auth/LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "@auth/LOGOUT_FAILURE",
  SIGNUP_REQUEST: "@auth/SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "@auth/SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "@auth/SIGNUP_FAILURE"
};

/* Login */
export function loginRequest(data) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: data
  };
}

export function loginSuccess(data) {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: data
  };
}

export function loginFailure() {
  return {
    type: Types.LOGIN_FAILURE
  };
}
/* Login */

/* Logout */
export function logoutRequest() {
  return {
    type: Types.LOGOUT_REQUEST
  };
}

export function logoutSuccess() {
  return {
    type: Types.LOGOUT_SUCCESS
  };
}

export function logoutFailure() {
  return {
    type: Types.LOGOUT_FAILURE
  };
}

/* Logout */

/* SignUp */

export function signUpRequest(data) {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: data
  };
}

export function signUpSuccess(data) {
  return {
    type: Types.SIGNUP_SUCCESS,
    payload: data
  };
}

export function signUpFailure() {
  return {
    type: Types.SIGNUP_FAILURE
  };
}

/* SignUp */
