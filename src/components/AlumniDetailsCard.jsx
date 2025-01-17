import React from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid2,
  Typography,
  Link,
} from "@mui/material";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const fallbackData = {
  name: "Alumni Name",
  graduationYear: "N/A",
  bio: "No bio available",
  imageUrl: "/placeholder.svg?height=128&width=128",
  role: "Alumni",
  education: [],
  experience: [],
  skills: [],
  details: {
    email: "N/A",
    phone: "N/A",
    location: "N/A",
    socialMedia: {
      linkedin: "",
      twitter: "",
    },
  },
};

export default function AlumniProfile() {
  const location = useLocation();
  const locationData = location.state?.alumni;

  // Use location data if available, otherwise use initialData or fallback
  const alumniData = locationData || fallbackData;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle farthest-corner at 0.8% 3.1%, rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2%)",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 600, md: 800 }, // Responsive maxWidth
          width: "100%", // Ensure it doesn't exceed the parent's width
          margin: { xs: 2, sm: 3 }, // Responsive margin
          padding: { xs: 2, sm: 3 }, // Responsive padding if needed
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={alumniData.imageUrl}
              alt={alumniData.name}
              sx={{ width: 100, height: 100 }}
            />
          }
          title={
            <Typography variant="h4" component="h1">
              {alumniData.name}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="text.secondary">
              {alumniData.role} • Class of {alumniData.graduationYear}
            </Typography>
          }
        />
        <CardContent>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1">{alumniData.bio}</Typography>
            </Grid2>

            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon color="action" sx={{ mr: 1 }} />
                    <Typography>{alumniData.details?.email}</Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon color="action" sx={{ mr: 1 }} />
                    <Typography>{alumniData.details?.phone}</Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationIcon color="action" sx={{ mr: 1 }} />
                    <Typography>{alumniData.details?.location}</Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Grid2>

            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                Social Media
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinkedInIcon color="action" sx={{ mr: 1 }} />
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
                    <TwitterIcon color="action" sx={{ mr: 1 }} />
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

            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {(alumniData.skills || []).map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </Box>
            </Grid2>

            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              {(alumniData.education || []).map((edu, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    {edu.degree} in {edu.field}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <SchoolIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle" }}
                    />
                    Graduated: {edu.year}
                  </Typography>
                </Box>
              ))}
            </Grid2>

            <Grid2 item xs={12}>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              {(alumniData.experience || []).map((exp, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">{exp.position}</Typography>
                  <Typography variant="body2">{exp.company}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <WorkIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle" }}
                    />
                    {exp.duration}
                  </Typography>
                </Box>
              ))}
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
}
