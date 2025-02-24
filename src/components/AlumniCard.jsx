import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AlumniCard = ({ alumni }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/alumni/details", { state: { alumni } });
  };

  return (
    <motion.div
      onClick={handleViewProfile}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-md cursor-pointer p-8"
      initial={{ opacity: 0, y: 20 }}
      style={{ width: 320 }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.005 }}
    >
      <div className="text-center glassmorphism-card">
        <div className="glassmorphism-card-img">
          <img src={alumni.image} alt="A" />
        </div>
        <div className="alumni-card-demographics-container">
          <h6 className="alumni-name-text">
            {alumni.first_name + " " + alumni.last_name}
          </h6>
          <h6 className="alumni-job-position-text">
            {alumni.current_occupation}
          </h6>
        </div>
        <Button className="primary-text glassmorphism-card-button">
          View Profile
        </Button>
      </div>
    </motion.div>
  );
};

export default AlumniCard;
