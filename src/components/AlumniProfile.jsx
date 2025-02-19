import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
  IconButton,
  useMediaQuery,
  Link,
  Divider,
} from "@mui/material";
import {
  School as SchoolIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  LocationOn as LocationIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { alumniData } from "../constants/alumnidata";
import coreHelper from "../helpers/coreHelper";
import { getUserMentees } from "../features/alumniSlice";
import { useDispatch, useSelector } from "react-redux";

const fallbackData = alumniData;
const mentorData = {
  name: "Warren Mitchell",
  imageUrl: "https://i.ibb.co/X98kHr0/ayato-modified.png",
  graduationYear: 2018,
  role: "Software Engineer",
};

const userInfo = coreHelper.getLoggedInUserData();

export default function AlumniSettings() {
  const userData = coreHelper.getLoggedInUserData();
  const { usersMentees } = useSelector((state) => state.alumniUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alumniData = userData || fallbackData;

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserMentees(userInfo.email));
    }
  }, []);

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
            <Divider sx={{ mx: 10 }} />
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
