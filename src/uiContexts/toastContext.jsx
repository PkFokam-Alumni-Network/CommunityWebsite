import React, { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";

// Create a context for the toast
const ToastContext = createContext();

// Create a toast provider
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const showToast = useCallback((message, severity = "info") => {
    setToast({ open: true, message, severity });
  }, []);

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
