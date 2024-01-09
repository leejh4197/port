import React from "react";
import ReactDOM from "react-dom/client";
import App from "./assets/App";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
