import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  CssBaseline,
  FormControl,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import pkfLogo from "../assets/pkflogo.png";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            className="w-[150px] h-[150px] rounded-full mx-auto"
          >
            <img
              src={pkfLogo}
              alt="Pkfokam Connect Logo"
              width={100}
              height={100}
              className="mx-auto rounded-full bg-blue-100 p-2"
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
              <TextField id="email" label="Email" variant="outlined" />
            </FormControl>
            <FormControl>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="text-red-500"
              disableElevation
              size="large"
            >
              Sign in
            </Button>
            <Link
              component="button"
              type="button"
              variant="body2"
              sx={{ alignSelf: "center" }}
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
