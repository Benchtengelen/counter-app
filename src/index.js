import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from 'redux';
// import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

//The created store
const store = createStore(
  allReducers,
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);