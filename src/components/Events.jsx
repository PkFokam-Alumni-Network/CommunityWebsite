import React from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  Card as MuiCard,
  CardContent,
  Stack,
} from "@mui/material";
import {
  Event as EventIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const events = [
  {
    title: "Graduation Ceremony",
    date: new Date("2024-12-10"),
    location: "Amphitheater",
  },
  {
    title: "Graduation Ceremony",
    date: new Date("2024-12-10"),
    location: "Amphitheater",
  },
  {
    title: "Graduation Ceremony",
    date: new Date("2024-12-10"),
    location: "Amphitheater",
  },
];

const EventCard = React.memo(({ title, date, location }) => {
  const MotionCard = motion(MuiCard);

  return (
    <MotionCard
      elevation={0}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      sx={{
        height: "100%",
        borderRadius: 2,
        border: 1,
        borderColor: "grey.200",
        bgcolor: "background.paper",
        overflow: "hidden",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent sx={{ p: 4, height: "100%" }}>
        <Stack spacing={3} height="100%">
          <Box>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              {title}
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EventIcon fontSize="small" sx={{ color: "primary.main" }} />
                <Typography variant="body2" color="text.primary">
                  {date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: "primary.main" }}
                />
                <Typography variant="body2" color="text.primary">
                  {location}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Button
            variant="outlined"
            sx={{
              mt: "auto",
              textTransform: "none",
              borderRadius: 1.5,
            }}
          >
            Learn More
          </Button>
        </Stack>
      </CardContent>
    </MotionCard>
  );
});

export default function Events() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: { xs: 4, md: 6 },
              fontWeight: 700,
            }}
          >
            Upcoming Events
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
