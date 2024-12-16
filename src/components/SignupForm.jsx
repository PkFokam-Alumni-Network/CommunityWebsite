import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  CssBaseline,
  FormControl,
} from "@mui/material";
import { motion } from "framer-motion";
import pkfLogo from "../assets/pkflogo.png";
import { validateSignupForm } from "../utils/validation";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const { isValid, errors } = validateSignupForm(formData);

    if (isValid) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-left px-4 py-12 sm:px-6 lg:px-8">
      <CssBaseline enableColorScheme />
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
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <TextField
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              size="large"
            >
              Sign Up
            </Button>
          </Box>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupForm;
