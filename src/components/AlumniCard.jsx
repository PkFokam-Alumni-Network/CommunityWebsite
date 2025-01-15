import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AlumniCard = ({ name, role, imageUrl, details }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate('/alumni/details', { state: { name, role, imageUrl, details } });
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
          <img src={imageUrl} alt="Alumni profile"/>
        </div>
        <div className="alumni-card-demographics-container">
          <h6 className="alumni-name-text">{name}</h6>
          <h6 className="alumni-job-position-text">{role}</h6>
        </div>
        <Button className="primary-text glassmorphism-card-button">
          View Profile
        </Button>
      </div>
    </motion.div>
  );
};

export default AlumniCard;