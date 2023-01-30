import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Context, FirebaseContext } from "./store/Context";
import firebase from "./firebase/config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Context>
  </FirebaseContext.Provider>
);
