import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { courseReducer } from "./store/reducers/courseReducer";
import { loginReducer } from "./store/reducers/loginReducer";
import { mainSaga } from "./store/sagas";
import "./styles.css";

import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ courseReducer, loginReducer }),
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mainSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
