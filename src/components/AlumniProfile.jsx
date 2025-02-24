import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link,
  CircularProgress,
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
import coreHelper from "../helpers/coreHelper";
import { getUser, getUserMentees } from "../features/alumniSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AlumniSettings() {
  const userInfo = coreHelper.getLoggedInUserData();
  const { usersMentees, userProfileData } = useSelector(
    (state) => state.alumniUsers
  );
  const [userProfile, setUserProfile] = useState(userProfileData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserMentees(userInfo.email));
      dispatch(getUser(userInfo.email));
    }
  }, []);

  useEffect(() => {
    if (userProfileData) setUserProfile(userProfileData);
  }, [userProfileData]);

  const handleEditClick = () => {
    navigate("/edit-info");
  };

  if (!userProfile || !userProfileData) {
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
        <CircularProgress />
      </Box>
    );
  }

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

        {/* Card Header */}
        <CardContent>
          <Grid container spacing={2} direction="column" alignItems="center">
            {/* Image */}
            <Grid item xs={12}>
              <Avatar
                src={userProfile.image}
                alt={"https://www.w3schools.com/howto/img_avatar.png"}
                sx={{ width: 120, height: 120 }}
              />
            </Grid>

            {/* Name */}
            <Grid item xs={12}>
              <Typography variant="h4" component="h1">
                {userProfile.first_name + " " + userProfile.last_name}
              </Typography>
            </Grid>

            {/* Occupation and Class */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="text.secondary">
                {userProfile.current_occupation} • Class of{" "}
                {userProfile.graduation_year}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        {/* Card Body */}
        <CardContent>
          <Grid container spacing={3}>
            {/* About Me Section */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                About Me
              </Typography>
              <Typography variant="body1">{userProfile.bio}</Typography>
            </Grid>

            {/* Contact Information Section */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Contact Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{userProfile.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{userProfile.phone}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Typography>{userProfile.address}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Social Media Section */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Social Media
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinkedInIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Link
                      href={userProfile.linkedin_profile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InstagramIcon
                      color="action"
                      sx={{ mr: 1, "&:hover": { color: "primary.main" } }}
                    />
                    <Link
                      href={userProfile.instagram_profile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram Profile
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Education Section */}
            <Grid item xs={12}>
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
                  {userProfile.degree} in {userProfile.major}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Graduated: {userProfile.graduation_year}
                </Typography>
              </Box>
            </Grid>
            <Divider sx={{ mx: 10 }} />

            {/* Mentor Section
            <Grid item xs={12}>
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
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
