import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Box,
  AvatarGroup,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import { AccessTime, OpenInNew, VideoLibrary } from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Fade-in animation for content
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export function EventCard({
  event,
  onDetailsClick,
  onActionClick,
  actionLabel,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: 500,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effects
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge the card
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)", // Add a shadow effect
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={event.imageUrl}
        alt={event.title}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          animation: `${fadeIn} 0.5s ease-in`, // Apply fade-in animation to content
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 1,
            minHeight: 60,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "primary.main", // Color change on hover
            },
          }}
        >
          {event.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <AccessTime sx={{ fontSize: 18, mr: 1 }} />
          <Typography variant="body2">{event.date}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <AvatarGroup max={3} sx={{ mr: 1 }}>
            {[...Array(3)].map((_, index) => (
              <Avatar
                key={index}
                alt={`Attendee ${index + 1}`}
                src="/placeholder.svg?height=40&width=40"
              />
            ))}
          </AvatarGroup>
          <Typography variant="body2" color="text.secondary">
            {event.attendees} people attended
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {event.categories.map((category) => (
            <Chip key={category} label={category} size="small" />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Button
          variant="outlined"
          startIcon={<OpenInNew />}
          onClick={() => onDetailsClick(event)}
          sx={{
            "&:hover": {
              backgroundColor: "primary.light", // Change button color on hover
            },
          }}
        >
          See Details
        </Button>
        {actionLabel && (
          <Button
            variant="outlined"
            startIcon={<VideoLibrary />}
            onClick={onActionClick}
            sx={{
              "&:hover": {
                backgroundColor: "secondary.light", // Change button color on hover
              },
            }}
          >
            {actionLabel}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
