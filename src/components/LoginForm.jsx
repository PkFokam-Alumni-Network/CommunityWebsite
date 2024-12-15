import React, { Component } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  FormControl,
  FormLabel,
  FormControlLabel,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

class LoginForm extends Component {
  state = { isLoading: false };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 px-4 py-12 sm:px-6 lg:px-8">
        <CssBaseline enableColorScheme />
        <motion.div
          className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src="/placeholder.svg?height=100&width=100"
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
              onSubmit={(e) => this.handleSubmit(e)}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <FormControl>
                {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                <TextField
                  // error={emailError}
                  // helperText={emailErrorMessage}
                  id="email"
                  label="Email"
                  variant="outlined"
                  // type="email"
                  // name="email"
                  // placeholder="your@email.com"
                  // autoComplete="email"
                  // autoFocus
                  // required
                  // fullWidth
                  // variant="outlined"
                  // color={emailError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  // name="password"
                  // placeholder="••••••"
                  // type="password"
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  // autoComplete="current-password"
                  // autoFocus
                  // required
                  // fullWidth
                  // variant="outlined"
                  // color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                //   onClick={validateInputs}
              >
                Sign in
              </Button>
              <Link
                component="button"
                type="button"
                //   onClick={handleClickOpen}
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
  }
}

export default LoginForm;
