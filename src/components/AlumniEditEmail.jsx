import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/alumniSlice";
import { useToast } from "../uiContexts/toastContext";

export default function EditEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useToast();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(updateUser({ email }))
      .unwrap()
      .then(() => {
        showToast("Email updated successfully", "success");
        navigate("/dashboard/settings");
      })
      .catch((error) => {
        showToast(error, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    navigate("/dashboard/settings");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle farthest-corner at 0.8% 3.1%, rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(255,188,224,1) 100.2%)",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 800, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Modify Email
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="New Email"
              value={email}
              onChange={handleEmailChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Email"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
