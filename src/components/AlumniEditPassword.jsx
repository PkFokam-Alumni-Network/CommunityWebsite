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

export default function EditPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useToast();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    setLoading(true);
    dispatch(updateUser({ oldPassword, newPassword }))
      .unwrap()
      .then(() => {
        showToast("Password updated successfully", "success");
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
            Modify Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Old Password"
              type="password"
              value={oldPassword}
              onChange={handleOldPasswordChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="New Password"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
                {loading ? "Updating..." : "Update Password"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
