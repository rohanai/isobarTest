import * as courseActionType from "../actionTypes/courseActionType";

const initialState = {
  course: [],
  error: null
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case courseActionType.SET_DATA:
      return { ...state, course: action.payload };
    case courseActionType.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
