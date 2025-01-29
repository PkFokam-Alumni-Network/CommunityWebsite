import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid2,
  Typography,
  IconButton,
  useMediaQuery,
  Link,
  Divider,
} from "@mui/material";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  LocationOn as LocationIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import alumniData from "../utils/alumnidata";

const fallbackData = alumniData;
const mentorData = {
  name: "Dr. Jane Smith",
  imageUrl: "https://example.com/jane-smith.jpg", // Replace with an actual image URL
  graduationYear: 2005,
  role: "Senior Data Scientist at Tech Corp",
};

export default function AlumniSettings() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationData = location.state?.alumni;
  const alumniData = locationData || fallbackData;

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleEditClick = () => {
    navigate("/edit-profile", { state: { alumni: alumniData } });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 600, md: 800 },
          width: "100%",
          margin: { xs: 2, sm: 3 },
          padding: { xs: 2, sm: 3 },
          position: "relative",
        }}
      >
        <IconButton
          aria-label="edit profile"
          onClick={handleEditClick}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
          }}
        >
          <EditIcon />
        </IconButton>
        <CardHeader
          avatar={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Avatar
                src={alumniData.imageUrl}
                alt={alumniData.name}
                sx={{
                  width: { xs: 120, sm: 100 },
                  height: { xs: 120, sm: 100 },
                }}
              />
            </Box>
          }
          title={
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              sx={{
                overflow: "visible",
                mt: { xs: 2, sm: 0 },
                ml: { xs: 5 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {alumniData.name}
            </Typography>
          }
          subheader={
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                overflow: "visible",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {alumniData.role} • Class of {alumniData.graduationYear}
            </Typography>
          }
          sx={{
            flexDirection: isMobile ? "column" : "",
            alignItems: "center",
            "& .MuiCardHeader-content": {
              overflow: "visible",
              width: "100%",
            },
            "& .MuiCardHeader-avatar": {
              marginRight: 0,
              marginBottom: { xs: 2, sm: 0 },
            },
          }}
        />
        <CardContent>
          <Grid2 container spacing={3}>
            {/* About Me Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                About Me
              </Typography>
              <Typography variant="body1">{alumniData.bio}</Typography>
            </Grid2>

            {/* Contact Information Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Contact Information
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{alumniData.details?.email}</Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{alumniData.details?.phone}</Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{alumniData.details?.location}</Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Grid2>

            {/* Social Media Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Social Media
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinkedInIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Link
                      href={alumniData.details?.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </Link>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TwitterIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Link
                      href={alumniData.details?.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter Profile
                    </Link>
                  </Box>
                </Grid2>
              </Grid2>
            </Grid2>

            {/* Skills Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {(alumniData.skills || []).map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </Box>
            </Grid2>

            {/* Education Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem", mr: 1 }}
              >
                Education
              </Typography>
              {(alumniData.education || []).map((edu, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    <SchoolIcon
                      fontSize="small"
                      sx={{
                        mr: 1,
                        verticalAlign: "middle",
                        "&:hover": { color: "primary.main" },
                      }}
                    />
                    {edu.degree} in {edu.field}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Graduated: {edu.year}
                  </Typography>
                </Box>
              ))}
            </Grid2>

            {/* Experience Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem", mr: 100 }}
              >
                Experience
              </Typography>
              {(alumniData.experience || []).map((exp, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    <WorkIcon
                      fontSize="small"
                      sx={{
                        mr: 1,
                        verticalAlign: "middle",
                        "&:hover": { color: "primary.main" },
                      }}
                    />
                    {exp.position} at {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.duration}
                  </Typography>
                </Box>
              ))}
            </Grid2>
            <Divider sx={{ my: 3 }} />

            {/* Mentor Section */}
            <Grid2 item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Alumni Mentor
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={mentorData.imageUrl}
                  alt={mentorData.name}
                  sx={{ width: 60, height: 60 }}
                />
                <Box>
                  <Typography variant="subtitle1">{mentorData.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Class of {mentorData.graduationYear}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mentorData.role}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
}
