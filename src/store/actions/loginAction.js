import * as loginActionType from "../actionTypes/loginActionType";

export const login = req => ({
  type: loginActionType.SET_CRED,
  payload: req
});

export const addCart = data => ({
  type: loginActionType.ADD_CART,
  payload: data
});

export const removeCart = data => ({
  type: loginActionType.REMOVE_CART,
  payload: data
});
