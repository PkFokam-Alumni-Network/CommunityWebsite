import React from "react";
import colors from "../utils/colors";
import { Button } from "@mui/material";
import {
  Event as EventIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

export default function Events() {
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

  const Card = React.memo(({ title, date, location }) => (
    <div
      className="bg-white rounded-md cursor-pointer p-8 transition-all"
      style={{
        boxShadow: "none",
        "&:hover": {
          boxShadow: `0 4px 6px ${colors.accent.main}`,
        },
      }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base mt-2">
        {" "}
        <EventIcon sx={{ marginRight: "8px" }} color="primary" />
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="text-base mt-2">
        <LocationOnIcon color="primary" sx={{ marginRight: "8px" }} />
        {location}
      </p>
      <Button sx={{ width: "100%", marginTop: "35px" }}>Learn More</Button>
    </div>
  ));
  return (
    <div className="justify-between">
      <div className="container mx-auto">
        <div className="py-10">
          <h2 className="text-2xl font-bold text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {events.map((event) => (
              <Card {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
