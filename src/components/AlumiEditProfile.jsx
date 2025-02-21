import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateUser, updateProfilePicture } from "../features/alumniSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  IconButton,
  Avatar,
  styled,
  Divider,
} from "@mui/material";
import {
  Save as SaveIcon,
  ArrowBack as ArrowBackIcon,
  CameraAlt as CameraIcon,
} from "@mui/icons-material";
import { useToast } from "../uiContexts/toastContext";

const Input = styled("input")({
  display: "none",
});

export default function EditProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useToast();

  const [alumniData, setAlumniData] = useState(
    location.state?.alumni || {
      first_name: "",
      last_name: "",
      graduation_year: "",
      address: "",
      email: "",
      phone: "",
      bio: "",
      image: "",
      current_occupation: "",
      degree: "",
      major: "",
      linkedin_profile: "",
      instagram_profile: "",
      mentor_email: null,
    }
  );
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlumniData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        setAlumniData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));

        try {
          const result = await dispatch(
            updateProfilePicture({
              email: alumniData.email,
              image: reader.result,
            })
          );
          setAlumniData((prevData) => ({
            ...prevData,
            image: result.payload.image_path,
          }));
        } catch (error) {
          console.error("Error updating profile picture:", error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(alumniData))
      .unwrap()
      .then(() => {
        showToast("Update successful", "success");
      })
      .catch((error) => {
        showToast(error, "error");
      });

    // Optionally, show a success message or navigate after update is successful
    navigate("/dashboard/settings", { state: { alumni: alumniData } });
  };

  const handleCancel = () => {
    navigate("/dashboard/settings", {
      state: { alumni: location.state?.alumni },
    });
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box position="relative">
                  <Avatar
                    src={alumniData.image}
                    alt={alumniData.name}
                    sx={{ width: 150, height: 150, mb: 2 }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      backgroundColor: "background.paper",
                      "&:hover": { backgroundColor: "background.default" },
                    }}
                  >
                    <Input
                      ref={fileInputRef}
                      accept="image/*"
                      type="file"
                      onChange={handleImageUpload}
                    />
                    <CameraIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="first_name"
                  value={alumniData.first_name}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  value={alumniData.last_name}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Graduation Year"
                  name="graduation_year"
                  value={alumniData.graduation_year}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Occupation"
                  name="current_occupation"
                  value={alumniData.current_occupation}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Biography"
                  name="bio"
                  value={alumniData.bio}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }}>
                  <Typography variant="h6">Education</Typography>
                </Divider>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        name="degree"
                        label="Degree"
                        value={alumniData.degree}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        name="major"
                        label="Major"
                        value={alumniData.major}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        fullWidth
                        label="Graduation Year"
                        value={alumniData.graduation_year}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }}>
                  <Typography variant="h6">Contact Details</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={alumniData.email}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={alumniData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="address"
                  value={alumniData.address}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="LinkedIn"
                  name="linkedin_profile"
                  value={alumniData.linkedin_profile}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Instagram"
                  name="instagram_profile"
                  value={alumniData.instagram_profile}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                  startIcon={<ArrowBackIcon />}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
