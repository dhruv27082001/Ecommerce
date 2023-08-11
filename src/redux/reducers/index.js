import { LOGIN_SUCCESS } from "../action/constant";

const initialState = {
  user: [],
  isLoggedIn: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  };
};

export default productReducer;
