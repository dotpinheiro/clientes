import { all } from "redux-saga/effects";
import auth from "./modules/auth/sagas";
import customer from "./modules/customer/sagas";

export default function* rootSaga() {
  return yield all([auth, customer]);
}
