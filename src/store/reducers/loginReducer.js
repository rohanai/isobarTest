import * as loginActionType from "../actionTypes/loginActionType";

const initialState = {
  authenticate: false,
  cart: {}
};

export const loginReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case loginActionType.SET_CRED:
      return { ...state, authenticate: action.payload };
    case loginActionType.ADD_CART:
      return { ...state, cart: action.payload };
    case loginActionType.REMOVE_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
