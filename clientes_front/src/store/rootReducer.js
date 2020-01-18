import { combineReducers } from "redux";
import auth from "./modules/auth/reducer";
import customer from "./modules/customer/reducer";

export default combineReducers({ auth, customer });
