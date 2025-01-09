import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

const AlumniCard = ({ name, role, imageUrl }) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className=" rounded-md cursor-pointer p-8"
      initial={{ opacity: 0, y: 20 }}
      style={{
        width: 320,
      }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.005 }}
    >
      <div className="text-center glassmorphism-card">
        <div className="glassmorphism-card-img">
          <img
            alt="Alumni profile"
            src="https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1"
          ></img>
        </div>
        <div className="alumni-card-demographics-container">
          <h6 className="alumni-name-text">Olivia Smith</h6>
          <h6 className="alumni-job-position-text">Full Stack Developer</h6>
        </div>
        <Button className="primary-text glassmorphism-card-button">
          View Profile
        </Button>
      </div>
    </motion.div>
  );
};

export default AlumniCard;
