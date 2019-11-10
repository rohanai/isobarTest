import { call, put } from "redux-saga/effects";
import axios from "axios";
import * as courseActionType from "../actionTypes/courseActionType";
import dataRes from "../../data/course.json";

function callCourseApi() {
  return dataRes;
}

export function* courseSaga() {
  try {
    let resp = yield call(callCourseApi);
    resp[0].lessons.forEach(element => {
      element.cart = false;
    });
    if (!resp) {
      yield put({
        type: courseActionType.SET_ERROR,
        payload: "error"
      });
    }
    yield put({
      type: courseActionType.SET_DATA,
      payload: resp[0].lessons
    });
  } catch (err) {
    yield put({
      type: courseActionType.SET_ERROR,
      payload: err.message
    });
  }
}
