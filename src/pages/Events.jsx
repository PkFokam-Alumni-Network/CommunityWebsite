import { useState } from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { EventCard } from "../components/EventCard";
import EventDetailsDialog from "../components/EventDetails";
import { keyframes } from "@mui/system";

// Slide up animation for event cards
const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Fade in for the entire grid of events
const fadeInGrid = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export default function EventsPage() {
  const [isGoing, setIsGoing] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  const pastEvent = {
    title: "December Fam Friday|From Finals to Fresh Starts",
    date: "Fri, Dec 20, 2024, 1:00 PM - 4:00 PM",
    location: "Virtual Event",
    description:
      "A session focused on transitioning from finals to a fresh start.",
    attendees: 257,
    categories: ["Workshop", "Community", "Academic Success"],
    imageUrl:
      "https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-b135bb1/spotme.com/wp-content/uploads/2020/07/Hero-1.jpg",
  };
  const pastEvents = new Array(6).fill(pastEvent);

  return (
    <Box sx={{ p: 3, maxWidth: 2000, margin: "0 auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ mr: 2, fontWeight: "bold" }}>
          Here's what's happening over the next few weeks 🥳💃🏾!!!
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Upcoming (1)
      </Typography>
      <EventCard
        event={upcomingEvent}
        isUpcoming
        onDetailsClick={setSelectedEvent}
        onActionClick={() => setIsGoing(!isGoing)}
        actionLabel={isGoing ? "Registered" : "Register"}
        sx={{
          animation: `${slideUp} 0.6s ease-out`, // Card entrance animation
        }}
      />

      <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
        Past (1)
      </Typography>
      <Grid2
        container
        spacing={3}
        sx={{
          animation: `${fadeInGrid} 1s ease-out`, // Fade in the entire grid
        }}
      >
        {pastEvents.map((event, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <EventCard
              event={event}
              onDetailsClick={setSelectedEvent}
              actionLabel="Recording"
              sx={{
                animation: `${slideUp} 0.6s ease-out ${index * 0.1}s`, // Staggered card entrance
              }}
            />
          </Grid2>
        ))}
      </Grid2>

      {selectedEvent && (
        <EventDetailsDialog
          open={Boolean(selectedEvent)}
          onClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      )}
    </Box>
  );
}
