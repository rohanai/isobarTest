import * as courseActionType from "../actionTypes/courseActionType";

export const fetchCourse = req => ({
  type: courseActionType.FETCH_COURSE,
  payload: req
});

export const setData = data => ({
  type: courseActionType.SET_DATA,
  payload: data
});
