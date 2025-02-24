import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  CssBaseline,
  FormControl,
  Link,
  CircularProgress,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import pkfLogo from "../assets/logo-black.png";
import { useDispatch } from "react-redux";
import { useToast } from "../uiContexts/toastContext";
import { loginUser } from "../features/authSlice";
import { NavLink } from "react-router";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  // Get the loading state from the store
  const [isLoading, setIsLoading] = useState(false);

  // Use the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  const showToast = useToast();

  // Function to handle the submission of the credentials
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const { email, password } = credentials;

    // Check if the email and password fields are not empty
    if (!email || !password || emailError || passwordError) {
      if (!email || !password) showToast("Please fill in all fields", "error");
      setIsLoading(false);
      return;
    }

    // Unwrap the promise returned by the loginUser thunk
    dispatch(loginUser(credentials))
      .unwrap()
      .then(() => {
        showToast("Login successful", "success");
      })
      .catch((error) => {
        showToast(error, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-pink-300 px-4 py-12 px-4 py-12 sm:px-6 lg:px-8">
      <CssBaseline enableColorScheme />
      <NavLink
        to="/"
        className={`fixed top-4 left-4 font-semibold flex items-center gap-2 bg-slate-200 p-4 rounded-full cursor-pointer hover:bg-primary-main transition transform hover:scale-105 sm:top-6 sm:left-6 sm:p-5 lg:top-8 lg:left-8 lg:p-6`}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: { xs: "8px", sm: "12px", lg: "16px" },
          top: { xs: "16px", sm: "24px", lg: "32px" },
          left: { xs: "16px", sm: "24px", lg: "32px" },
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <ArrowBack color="secondary" />
      </NavLink>
      <motion.div
        className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-40 h-40 p-4 rounded-full mx-auto bg-gray-100"
          >
            <img
              src={pkfLogo}
              style={{
                scale: 1.5,
              }}
              alt="Pkfokam Connect Logo"
              className="mx-auto p-2 w-full h-full object-cover"
            />
          </motion.div>
          <motion.h2
            className="mt-6 text-3xl font-extrabold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to Pkfokam Connect
          </motion.h2>
          <p className="mt-2 text-sm text-gray-600">
            Bridging generations of knowledge and innovation
          </p>
        </div>
        <div className="space-y-4">
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                label="Email"
                variant="outlined"
                value={credentials.email}
                onChange={handleChange}
                fullWidth
                color={emailError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl color="secondary">
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={credentials.password}
                onChange={handleChange}
                fullWidth
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              size="large"
              disabled={isLoading} // Add disabled state
              sx={{
                position: "relative",
              }}
              onClick={validateInputs}
            >
              <div className="p-1">
                {isLoading ? (
                  <CircularProgress size={24} color="black" />
                ) : (
                  <span>Sign in</span>
                )}
              </div>
            </Button>
            <Link
              component="button"
              type="button"
              variant="body2"
              sx={{ alignSelf: "center" }}
              color="secondary"
            >
              Forgot your password?
            </Link>
          </Box>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
