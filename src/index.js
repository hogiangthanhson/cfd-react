import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { en, vi } from "./locals";
import AppProvider from "./core/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider store={store} translate={{ en, vi }}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
