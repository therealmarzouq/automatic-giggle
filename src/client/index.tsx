import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

import { App } from "@/containers/App";
import rootReducer from "@/slices";
import thunkMiddleware from "redux-thunk";

import "@/styles/index.scss";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
