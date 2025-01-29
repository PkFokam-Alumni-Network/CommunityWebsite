import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Highlight from "../components/Highlights";
import { EventCard } from "../components/EventCard";
import AnnouncementCard from "../components/AnnouncementCard";

// Sample data
const highlights = [
  {
    id: "1",
    title: "Our newest AWS MVP",
    description:
      "Let's give a round of applause to Adele Germaine for being an MVP at AWS. Cheers Adele ✨. Thanks for raising the bar in Quality",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5yo9gMlEOOsOPugZc_oC14GBAWFPkPxaYw&s",
    link: "https://www.linkedin.com/posts/adele-germaine-noumbo-450814207_most-valuable-player-award-was-issued-by-activity-7279996712578940928-dmIt",
  },
  {
    id: "2",
    title: "Six Sigma Lean Green Belt",
    description:
      "Our Alumni Allan who already had a Black Belt in Nanbudo just graduated with his Lean Six Sigma Green Belt. Mixing Martial Arts with School",
    imageUrl:
      "https://i.ytimg.com/vi/RNHF-99zLM0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFOV9QH7wrKBXr1s6DsB7Nx_5uNA",
    link: "https://www.linkedin.com/posts/allan-njiakin-msem-e-i-t-51375315a_masters-engineering-sixsigma-activity-7280697089381023745-Ap7B",
  },
  {
    id: "3",
    title: "PKF Alumni Network Launch",
    description:
      "We are pleased to announce the launch of our Alumni Network. Where we will build a community of like minded individuals. ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqvykN5uCRhfPm087-8jIBar3L-jl6tobuw&s",
    link: "/eco-friendly-escapes",
  },
];

const upcomingEvent = {
  title: "Community meeting",
  date: "Fri, Jan 24, 2025, 11:30 AM - 5:15 PM",
  location: "Virtual Event",
  description:
    "Join us for PACI's Spring '25 Meeting! Connect with past alumni, explore career opportunities, and network with industry professionals.",
  attendees: 931,
  categories: [
    "Career Fair",
    "Networking",
    "Professional Development",
    "Virtual Event",
  ],
  imageUrl:
    "https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-b135bb1/spotme.com/wp-content/uploads/2020/07/Hero-1.jpg",
};

const recentAnnouncement = {
  id: 1,
  title: "Annual Alumni Gala",
  date: "2023-06-15",
  summary:
    'Join us for an evening of celebration and networking at our Annual Alumni Gala. This year\'s theme is "Bridging Generations" and promises to be an unforgettable night of reconnection and inspiration.',
  image:
    "https://usersnap.com/blog/wp-content/uploads/2023/11/feature-announcements-1024x538.png",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const recentActivities = [
  {
    id: "1",
    type: "comment",
    content: "John Doe commented on the upcoming reunion event",
    timestamp: "2 hours ago",
    user: "John Doe",
  },
  {
    id: "2",
    type: "job",
    content: "New job opportunity posted: Software Engineer at Tech Co",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    type: "profile",
    content: "Sarah Smith updated her profile information",
    timestamp: "2 days ago",
    user: "Sarah Smith",
  },
  {
    id: "4",
    type: "event",
    content: "Annual alumni dinner next month",
    timestamp: "1 week ago",
  },
  {
    id: "5",
    type: "default",
    content: "New campus expansion project announced",
    timestamp: "2 weeks ago",
  },
];

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
        textAlign="center"
      >
        Glad to have you back 😁! Here’s the latest update!!!
      </Typography>

      <Grid container spacing={4}>
        {/* Quick Stats */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Stats
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" color="primary">
                    22
                  </Typography>
                  <Typography variant="body2">Alumni Members</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" color="secondary">
                    3
                  </Typography>
                  <Typography variant="body2">Upcoming Events</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" color="success.main">
                    3
                  </Typography>
                  <Typography variant="body2">New Announcements</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[
                "Ryan Mustapha registered for the upcoming reunion event",
                "Adrian Soh registered for the upcoming reunion event",
                "Adele joined the Alumni community",
                "Announcement: Annual alumni dinner next month",
              ].map((activity, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    pb: 1,
                    borderBottom: index !== 3 ? 1 : 0,
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="body2">{activity}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* New sections */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", mt: 6, mb: 3 }}
      >
        Highlights
      </Typography>
      <Grid container spacing={4}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Highlight {...highlight} />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", mt: 6, mb: 3 }}
      >
        Upcoming Event
      </Typography>
      <EventCard
        event={upcomingEvent}
        onDetailsClick={() => console.log("View event details")}
        onActionClick={() => console.log("Register for event")}
        actionLabel="Register"
      />

      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", mt: 6, mb: 3 }}
      >
        Recent Announcement
      </Typography>
      <AnnouncementCard announcement={recentAnnouncement} />
    </Box>
  );
};

export default HomePage;
