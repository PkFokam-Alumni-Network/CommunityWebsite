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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={event.imageUrl}
        alt={event.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, minHeight: 60 }}
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
        >
          See Details
        </Button>
        {actionLabel && (
          <Button
            variant="outlined"
            startIcon={<VideoLibrary />}
            onClick={onActionClick}
          >
            {actionLabel}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
