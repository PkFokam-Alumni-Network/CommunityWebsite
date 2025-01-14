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
import pkfLogo from "../assets/pkflogo.png";
import { useDispatch } from "react-redux";
import { useToast } from "../uiContexts/toastContext";
import { loginUser } from "../features/authSlice";
import { NavLink } from "react-router";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Get the loading state from the store
  const [isLoading, setIsLoading] = useState(false);

  // Use the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  const showToast = useToast();

  //
  // Function to handle the submission of the credentials
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-left px-4 py-12 sm:px-6 lg:px-8">
      <CssBaseline enableColorScheme />
      <NavLink
        to="/"
        className={`fixed top-4 left-4 font-semibold flex items-center gap-2 bg-slate-200 p-4 rounded-full cursor-pointer hover:bg-primary-main transition`}
      >
        <ArrowBack color="secondary" />
        <span>Back</span>
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
                id="email"
                label="Email"
                variant="outlined"
                value={credentials.email}
                onChange={handleChange}
                fullWidth
              />
            </FormControl>
            <FormControl color="secondary">
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={credentials.password}
                onChange={handleChange}
                fullWidth
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
