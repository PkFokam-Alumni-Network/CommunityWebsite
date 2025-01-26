import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Chip,
  IconButton,
} from "@mui/material";
import {
  Save as SaveIcon,
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
} from "@mui/icons-material";

export default function EditProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [alumniData, setAlumniData] = useState(
    location.state?.alumni || {
      name: "",
      graduationYear: "",
      bio: "",
      role: "",
      skills: [],
      details: {
        email: "",
        phone: "",
        location: "",
        socialMedia: {
          linkedin: "",
          twitter: "",
        },
      },
    }
  );
  const [newSkill, setNewSkill] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlumniData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setAlumniData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        [name]: value,
      },
    }));
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setAlumniData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        socialMedia: {
          ...prevData.details.socialMedia,
          [name]: value,
        },
      },
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setAlumniData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setAlumniData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    console.log("Updated alumni data:", alumniData);
    // Navigate back to the profile page
    navigate("/alumni-profile", { state: { alumni: alumniData } });
  };

  const handleBack = () => {
    navigate(-1);
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
      <Card sx={{ maxWidth: 600, width: "100%" }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" component="h1">
              Edit Profile
            </Typography>
            <Box /> {/* Empty box for spacing */}
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={alumniData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Graduation Year"
                  name="graduationYear"
                  value={alumniData.graduationYear}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Role"
                  name="role"
                  value={alumniData.role}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Bio"
                  name="bio"
                  value={alumniData.bio}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={alumniData.details.email}
                  onChange={handleDetailsChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={alumniData.details.phone}
                  onChange={handleDetailsChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={alumniData.details.location}
                  onChange={handleDetailsChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="LinkedIn"
                  name="linkedin"
                  value={alumniData.details.socialMedia.linkedin}
                  onChange={handleSocialMediaChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Twitter"
                  name="twitter"
                  value={alumniData.details.socialMedia.twitter}
                  onChange={handleSocialMediaChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Skills</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                  {alumniData.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      onDelete={() => handleRemoveSkill(skill)}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    label="New Skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <IconButton onClick={handleAddSkill}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
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
