import React, { useState } from "react";
import { TextField, Button, Container, Grid2, Box } from "@mui/material";
import { useToast } from "../uiContexts/toastContext";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const showToast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    if (formData.email && formData.message) {
      showToast(
        "Submission received! We appreciate your time and will review your message promptly.",
        "success"
      );
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: "",
      });
    } else {
      showToast(
        "Oops! There seems to be an issue. Please retry in a moment.",
        "error"
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  fullWidth
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid2>
            </Grid2>
            <Box mt={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit →
              </Button>
            </Box>
          </form>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ContactForm;
