import { useState } from "react";
import { Box, Typography, Grid2, Container } from "@mui/material";
import { EventCard } from "../components/EventCard";
import EventDetailsDialog from "../components/EventDetails";

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
          Events
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
      />

      <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
        Past (1)
      </Typography>
      <Grid2 container spacing={3}>
        {pastEvents.map((event, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <EventCard
              event={event}
              onDetailsClick={setSelectedEvent}
              actionLabel="Recording"
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
