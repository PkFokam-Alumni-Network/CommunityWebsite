import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ToastProvider } from "./uiContexts/toastContext";
import { Provider } from "react-redux";
import theme from "./theme/theme";
import store from "./store/store";

// Import the mock service worker
import "./api/mockService";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ToastProvider>
          <App />
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
