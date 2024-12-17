import React from "react";
import colors from "../utils/colors";
import { Button } from "@mui/material";
import {
  Event as EventIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

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
    <motion.div
      className="bg-white rounded-md cursor-pointer p-8 transition-all"
      style={{
        borderWidth: "1px",
        borderColor: colors.primary.light,
        boxShadow: "none",
      }}
      whileHover={{ scale: 1.005 }}
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
      <Button sx={{ width: "100%", marginTop: "3rem" }}>Learn More</Button>
    </motion.div>
  ));
  return (
    <div className="justify-between">
      <div className="container mx-auto">
        <div className="py-[4rem]">
          <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
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
