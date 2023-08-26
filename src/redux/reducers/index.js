import { LOGIN_SUCCESS, SET_USER } from "../action/constant";

const initialState = {
  user: [],
  customer: [],
  isLoggedIn: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action?.payload,
        isLoggedIn: true,
      };
      case SET_USER:
      return {
        ...state,
        customer: action?.payload,
      }
      
    default:
      return state;
  };
};

export default productReducer;
