import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import {
  School as SchoolIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  LocationOn as LocationIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

const fallbackData = {
  irst_name: "Ayato",
  last_name: "FallBack",
  graduation_year: "2018",
  address: "San Francisco, USA",
  email: "ayato.mitchell@email.com",
  bio: "Hi there! I'm Ayato, a software engineer with a passion for building innovative solutions. I specialize in backend development and love solving complex problems. Let's connect if you're into tech or enjoy discussing the latest in AI and machine learning!",
  image: "https://i.ibb.co/X98kHr0/ayato-modified.png",
  current_occupation: "Staff Software Engineer",
  degree: "Bachelor of Science",
  major: "Computer Science",
  linkedin_profile: "https://www.linkedin.com/in/warren-mitchell",
  instagram_profile: "https://twitter.com/warrenmitchell",
  mentor_email: null,
};

export default function AlumniProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationData = location.state?.alumni;
  const alumniData = locationData || fallbackData;

  const handleBackClick = () => {
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
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 600, md: 800 },
          width: "100%",
          margin: { xs: 2, sm: 3 },
          padding: { xs: 2, sm: 3 },
        }}
      >
        {/* Back Button with Arrow */}
        <Box
          sx={{
            position: "absolute",
            top: 1,
            left: 10,
            zIndex: 1, // Ensures the button is above the card
          }}
        >
          <IconButton
            color="primary"
            onClick={handleBackClick}
            sx={{
              display: { xs: "block", sm: "block" }, // Adjust display on small screens
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <CardHeader
          avatar={
            <Avatar
              src={alumniData.image}
              alt={"https://www.w3schools.com/howto/img_avatar.png"}
              sx={{ width: 100, height: 100 }}
            />
          }
          title={
            <Typography variant="h4" component="h1">
              {alumniData.first_name + " " + alumniData.last_name}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="text.secondary">
              {alumniData.current_occupation} • Class of{" "}
              {alumniData.graduation_year}
            </Typography>
          }
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
                    <Typography>{alumniData.email}</Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{alumniData.phone}</Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{alumniData.address}</Typography>
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
                      href={alumniData.linkedin_profile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </Link>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InstagramIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Link
                      href={alumniData.instagram_profile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram Profile
                    </Link>
                  </Box>
                </Grid2>
              </Grid2>
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
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  <SchoolIcon
                    fontSize="small"
                    sx={{
                      mr: 1,
                      verticalAlign: "middle",
                      "&:hover": { color: "primary.main" },
                    }}
                  />
                  {alumniData.degree} in {alumniData.major}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Graduated: {alumniData.graduation_year}
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
}
