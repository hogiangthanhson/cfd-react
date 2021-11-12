import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { TranslateProvider } from ".";

export default function AppProvider({ store, children, translate }) {
  return (
    <Router>
      <Provider store={store}>
        <TranslateProvider translate={translate}>{children}</TranslateProvider>
      </Provider>
    </Router>
  );
}
