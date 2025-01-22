import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward, CalendarToday } from "@mui/icons-material";

const AnnouncementCard = ({ announcement }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(650));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden",
          boxShadow: 3,
          borderRadius: 2,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: isMobile ? "100%" : 200,
            height: isMobile ? 200 : "100%",
            objectFit: "cover",
          }}
          image={announcement.image}
          alt={announcement.title}
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 3 }}
        >
          <CardContent sx={{ flexGrow: 1, p: 0, "&:last-child": { pb: 0 } }}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
            >
              {announcement.title}
            </Typography>
            <Chip
              icon={<CalendarToday />}
              label={formatDate(announcement.date)}
              size="small"
              sx={{
                mb: 2,
                backgroundColor: "secondary.main",
                color: "secondary.contrastText",
              }}
            />
            <Typography variant="body1" sx={{ mb: 3 }}>
              {announcement.summary}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                endIcon={<ArrowForward />}
                sx={{
                  borderRadius: 20,
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Read More
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{ backgroundColor: "primary.main", color: "white", py: 3 }}
        >
          {announcement.title}
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          <Box sx={{ position: "relative", width: "100%", height: 300 }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={announcement.image}
              alt={announcement.title}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                p: 2,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {formatDate(announcement.date)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ p: 3 }}>
            <Typography variant="body1">{announcement.content}</Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            sx={{
              borderRadius: 20,
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AnnouncementCard;
