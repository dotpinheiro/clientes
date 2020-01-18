import api from "../../../services/api";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { loginSuccess, Types, signUpSuccess, logoutSuccess } from "./actions";

function* login(action) {
  const { payload } = action;
  const { email, password } = payload;
  try {
    const { data } = yield call(api.post, "/login", { email, password });
    yield put(loginSuccess(data));
  } catch (err) {}
}

function* logout() {
  try {
    const { data } = yield call(api.post, "/logout");
    yield put(logoutSuccess(data));
  } catch (err) {
  }
}

function* signUp(action) {
  const { payload } = action;
  try {
    const { data } = yield call(api.post, "/signup", payload);
    yield put(signUpSuccess(data));
  } catch (err) {}
}

export default all([
  takeLatest(Types.LOGIN_REQUEST, login),
  takeLatest(Types.SIGNUP_REQUEST, signUp),
  takeLatest(Types.LOGOUT_REQUEST, logout)
]);
