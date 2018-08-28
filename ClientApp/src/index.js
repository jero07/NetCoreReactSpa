import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
 

const rootElement = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <App /> 
    </React.Fragment>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
