import React from "react";
import { useState, useRef } from "react";
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
  Avatar,
  styled,
  Divider,
} from "@mui/material";
import {
  Save as SaveIcon,
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  CameraAlt as CameraIcon,
} from "@mui/icons-material";

const Input = styled("input")({
  display: "none",
});

export default function EditProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [alumniData, setAlumniData] = useState(
    location.state?.alumni || {
      name: "",
      graduationYear: "",
      bio: "",
      imageUrl: "/placeholder.svg?height=200&width=200",
      role: "",
      education: [],
      experience: [],
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
  const fileInputRef = useRef(null);

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

  const handleEducationChange = (index, field, value) => {
    setAlumniData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleAddEducation = () => {
    setAlumniData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { degree: "", field: "", year: "" }],
    }));
  };

  const handleRemoveEducation = (index) => {
    setAlumniData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setAlumniData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const handleAddExperience = () => {
    setAlumniData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { company: "", position: "", duration: "" },
      ],
    }));
  };

  const handleRemoveExperience = (index) => {
    setAlumniData((prevData) => ({
      ...prevData,
      experience: prevData.experience.filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAlumniData((prevData) => ({
          ...prevData,
          imageUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    console.log("Updated alumni data:", alumniData);
    // Navigate back to the profile page with updated data
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <IconButton onClick={handleCancel}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
              Edit Profile
            </Typography>
            <Box /> {/* Empty box for spacing */}
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Box position="relative">
                  <Avatar
                    src={alumniData.imageUrl}
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
                  label="Name"
                  name="name"
                  value={alumniData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Graduation Year"
                  name="graduationYear"
                  value={alumniData.graduationYear}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Role"
                  name="role"
                  value={alumniData.role}
                  onChange={handleInputChange}
                  variant="outlined"
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
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }}>
                  <Typography variant="h6">Education</Typography>
                </Divider>
                {alumniData.education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Degree"
                          value={edu.degree}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "degree",
                              e.target.value
                            )
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Field"
                          value={edu.field}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "field",
                              e.target.value
                            )
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Year"
                          value={edu.year}
                          onChange={(e) =>
                            handleEducationChange(index, "year", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={1}>
                        <IconButton
                          onClick={() => handleRemoveEducation(index)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
                <Button startIcon={<AddIcon />} onClick={handleAddEducation}>
                  Add Education
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }}>
                  <Typography variant="h6">Experience</Typography>
                </Divider>
                {alumniData.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Company"
                          value={exp.company}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "company",
                              e.target.value
                            )
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Position"
                          value={exp.position}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "position",
                              e.target.value
                            )
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Duration"
                          value={exp.duration}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "duration",
                              e.target.value
                            )
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={1}>
                        <IconButton
                          onClick={() => handleRemoveExperience(index)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
                <Button startIcon={<AddIcon />} onClick={handleAddExperience}>
                  Add Experience
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }}>
                  <Typography variant="h6">Skills</Typography>
                </Divider>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {alumniData.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      onDelete={() => handleRemoveSkill(skill)}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    label="New Skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    variant="outlined"
                  />
                  <IconButton onClick={handleAddSkill} color="primary">
                    <AddIcon />
                  </IconButton>
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
                  value={alumniData.details.email}
                  onChange={handleDetailsChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={alumniData.details.phone}
                  onChange={handleDetailsChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={alumniData.details.location}
                  onChange={handleDetailsChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="LinkedIn"
                  name="linkedin"
                  value={alumniData.details.socialMedia.linkedin}
                  onChange={handleSocialMediaChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Twitter"
                  name="twitter"
                  value={alumniData.details.socialMedia.twitter}
                  onChange={handleSocialMediaChange}
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
