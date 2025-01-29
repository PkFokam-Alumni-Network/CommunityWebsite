import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import { Comment, Work, Person, Event, Star } from "@mui/icons-material";

const activityIcons = {
  comment: <Comment />,
  job: <Work />,
  profile: <Person />,
  event: <Event />,
  default: <Star />,
};

const getActivityColor = (type) => {
  switch (type) {
    case "comment":
      return "primary.main";
    case "job":
      return "success.main";
    case "profile":
      return "secondary.main";
    case "event":
      return "warning.main";
    default:
      return "info.main";
  }
};

const RecentActivity = ({ activities }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={activity.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: getActivityColor(activity.type) }}>
                  {activityIcons[activity.type] || activityIcons.default}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={activity.content}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {activity.user && `${activity.user} - `}
                    </Typography>
                    {activity.timestamp}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < activities.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default RecentActivity;
