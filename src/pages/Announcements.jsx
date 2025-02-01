import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, Box, Divider, Grid2 } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import AnnouncementCard from "../components/AnnouncementCard";
import { getAnnouncements } from "../features/announcementsSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3a8a",
    },
    secondary: {
      main: "#fbbf24",
    },
    background: {
      default: "#f3f4f6",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      marginBottom: "2rem",
      color: "#1e3a8a",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      marginBottom: "1.5rem",
      color: "#1e3a8a",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
  },
});

const announcements = [
  {
    id: 1,
    title: "Annual Alumni Gala",
    date: "2023-06-15",
    summary:
      'Join us for an evening of celebration and networking at our Annual Alumni Gala. This year\'s theme is "Bridging Generations" and promises to be an unforgettable night of reconnection and inspiration.',
    image:
      "https://usersnap.com/blog/wp-content/uploads/2023/11/feature-announcements-1024x538.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "New Scholarship Program",
    date: "2023-07-01",
    summary:
      "We're excited to announce a new scholarship program for children of alumni. This initiative aims to support the next generation of leaders and innovators from our esteemed alumni community.",
    image:
      "https://usersnap.com/blog/wp-content/uploads/2023/11/feature-announcements-1024x538.png",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    title: "Campus Expansion Project",
    date: "2023-08-10",
    summary:
      "Learn about our ambitious campus expansion project and how you can contribute. This transformative initiative will enhance our facilities and create new opportunities for future generations of students.",
    image:
      "https://usersnap.com/blog/wp-content/uploads/2023/11/feature-announcements-1024x538.png",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    id: 4,
    title: "Alumni Mentorship Program",
    date: "2023-07-15",
    summary:
      "Introducing our new Alumni Mentorship Program, connecting current students with experienced alumni for career guidance and professional development.",
    image:
      "https://usersnap.com/blog/wp-content/uploads/2023/11/feature-announcements-1024x538.png",
    content:
      "Our new Alumni Mentorship Program is designed to bridge the gap between academic learning and real-world experience. By pairing current students with successful alumni, we aim to provide valuable insights, career guidance, and networking opportunities. This program will help students navigate their career paths more effectively and give alumni a chance to give back to their alma mater in a meaningful way.",
  },
];

const groupAnnouncementsByMonth = (announcements) => {
  const grouped = announcements.reduce((acc, announcement) => {
    const date = new Date(announcement.date);
    const monthYear = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(announcement);
    return acc;
  }, {});

  return Object.entries(grouped).sort((a, b) => {
    const dateA = new Date(a[0]);
    const dateB = new Date(b[0]);
    return dateB.getTime() - dateA.getTime();
  });
};

const Announcements = () => {
  const { announcementList } = useSelector((state) => state.announcements);
  const groupedAnnouncements = groupAnnouncementsByMonth(announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnnouncements());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid2 container spacing={4}>
            <Grid2 item xs={12} md={9}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  sx={{ mb: 4 }}
                >
                  Recent Announcements
                </Typography>
              </motion.div>
              {groupedAnnouncements.map(
                ([monthYear, monthAnnouncements], groupIndex) => (
                  <Box key={monthYear} sx={{ mb: 6 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {monthYear}
                      </Typography>
                      <Divider sx={{ mb: 3 }} />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                        }}
                      >
                        {monthAnnouncements.map((announcement, index) => (
                          <motion.div
                            key={announcement.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: groupIndex * 0.1 + index * 0.05,
                            }}
                          >
                            <AnnouncementCard announcement={announcement} />
                          </motion.div>
                        ))}
                      </Box>
                    </motion.div>
                  </Box>
                )
              )}
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Announcements;
