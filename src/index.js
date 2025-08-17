import React from "react";
// hosed the nav import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import "bootswatch/dist/darkly/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <React.StrictMode>
      {/* <HelmetProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('web-ui-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();