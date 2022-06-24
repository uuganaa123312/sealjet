import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import ContextProvider from "./Context";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </BrowserRouter>
  );
};

export default React.memo(App);
