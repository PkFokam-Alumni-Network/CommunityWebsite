import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import mockService from "./api/mockService";

const root = ReactDOM.createRoot(document.getElementById("root"));

mockService.init();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
