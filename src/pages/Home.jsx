import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import colors from "../utils/colors";
import { Button } from "@mui/material";

export default function Home() {
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

  const Card = ({ title, date, location }) => (
    <div
      className="bg-white rounded-sm cursor-pointer p-4 transition-all"
      style={{
        boxShadow: "none",
        "&:hover": {
          boxShadow: `0 4px 6px ${colors.accent.main}`,
        },
      }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base">{date.toDateString()}</p>
      <p className="text-base">{location}</p>
      <Button sx={{ width: "100%", marginTop: "35px" }}>Learn More</Button>
    </div>
  );

  return (
    <>
      <Banner />
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
    </>
  );
}
