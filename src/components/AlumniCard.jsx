import React from "react";
import { motion } from "framer-motion";

const AlumniCard = ({ name, role, imageUrl }) => {
  return (
    <motion.div
      className="w-80 space-y-8 rounded-2xl bg-white p-8 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-40 h-40 p-4 rounded-full mx-auto bg-gray-100"
        >
          <img
            src={imageUrl || "/api/placeholder/120/120"}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        <motion.div
          className="mt-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            {name || "John Doe"}
          </h2>
          <p className="text-sm text-gray-600">
            {role || "Software Developer"}
          </p>
        </motion.div>
      </div>

      <motion.button
        className="w-full py-3 px-4 bg-black text-white rounded-lg font-medium
                   hover:bg-gray-800 transition-colors duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View Profile
      </motion.button>
    </motion.div>
  );
};

export default AlumniCard;
