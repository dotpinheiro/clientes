import { Types } from "./actions";

const initialState = {
  loggedIn: false,
  userlogged: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS: {
      const { user, token } = action.payload;
      localStorage.setItem("token", token);
      return { ...state, userlogged: user, loggedIn: true };
    }
    case Types.LOGOUT_SUCCESS: {
      return initialState;
    }
    case Types.SIGNUP_SUCCESS: {
      const { user, token } = action.payload;
      localStorage.setItem("token", token);
      return { ...state, userlogged: user, loggedIn: true };
    }
    default:
      return state;
  }
};
