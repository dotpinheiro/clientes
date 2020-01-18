import api from "../../../services/api";
import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  Types,
  getCustomersSuccess,
  addCustomerSuccess,
  updateCustomerSuccess,
  deleteCustomerSuccess
} from "./actions";

function* getCustomers() {
  try {
    const { data } = yield call(api.get, "/customer");
    yield put(getCustomersSuccess(data));
  } catch (err) {}
}

function* addCustomer(action) {
  const { payload } = action;
  try {
    const { data } = yield call(api.post, "/customer", payload);
    yield put(addCustomerSuccess(data));
  } catch (err) {}
}

function* updateCustomer(action) {
  const { payload } = action;
  try {
    const { data } = yield call(api.put, `/customer/${payload.id}`, payload);
    yield put(updateCustomerSuccess(data));
  } catch (err) {}
}

function* removeCustomer(action) {
  const { payload } = action;
  try {
    const { data } = yield call(api.delete, `/customer/${payload}`);
    yield put(deleteCustomerSuccess(payload));
  } catch (err) {}
}

export default all([
  takeLatest(Types.GET_CUSTOMERS_REQUEST, getCustomers),
  takeLatest(Types.ADD_CUSTOMER_REQUEST, addCustomer),
  takeLatest(Types.UPDATE_CUSTOMER_REQUEST, updateCustomer),
  takeLatest(Types.DELETE_CUSTOMER_REQUEST, removeCustomer)
]);
