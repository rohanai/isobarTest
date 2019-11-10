import { takeLatest } from "redux-saga/effects";

import { courseSaga } from "./courseSaga";
import * as courseActionType from "../actionTypes/courseActionType";

export function* mainSaga() {
  yield takeLatest(courseActionType.FETCH_COURSE, courseSaga);
}
