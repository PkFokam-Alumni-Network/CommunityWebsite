import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  Grid2,
} from "@mui/material";
import {
  AccessTime,
  LocationOn,
  Group,
  Description,
  Category,
} from "@mui/icons-material";

export default function EventDetailsDialog({ open, onClose, event }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ pb: 1, fontSize: "1.5rem", fontWeight: "bold" }}>
        {event.title}
      </DialogTitle>
      <DialogContent>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} md={6}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                height="300"
                image={event.imageUrl}
                alt={event.title}
                sx={{ borderRadius: 2 }}
              />
            </Card>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <List sx={{ mb: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <AccessTime color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="medium">
                      {event.date}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="medium">
                      {event.location}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Group color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <AvatarGroup max={5}>
                      <Avatar
                        alt="Attendee 1"
                        src="/placeholder.svg?height=40&width=40"
                      />
                      <Avatar
                        alt="Attendee 2"
                        src="/placeholder.svg?height=40&width=40"
                      />
                      <Avatar
                        alt="Attendee 3"
                        src="/placeholder.svg?height=40&width=40"
                      />
                      <Avatar
                        alt="Attendee 4"
                        src="/placeholder.svg?height=40&width=40"
                      />
                      <Avatar
                        alt="Attendee 5"
                        src="/placeholder.svg?height=40&width=40"
                      />
                    </AvatarGroup>
                    <Typography variant="body1" fontWeight="medium">
                      {event.attendees} people going
                    </Typography>
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </Grid2>
        </Grid2>

        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
            }}
          >
            <Category fontSize="small" />
            Categories
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {event.categories.map((category) => (
              <Chip key={category} label={category} variant="outlined" />
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
            }}
          >
            <Description fontSize="small" />
            Description
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {event.description}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button variant="contained" color="primary">
          Register Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}
