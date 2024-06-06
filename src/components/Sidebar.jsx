import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProductLandingPage() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8 cursor-pointer">
      {/* Component One: Product Showcase */}
      <motion.div
        className={`bg-blue-500 w-64 h-64 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg transform transition duration-500 ${
          isActive ? "rotateY-360" : ""
        }`}
        onClick={toggleActive}
        whileHover={{ scale: 1.1 }}
      >
        Product Showcase
      </motion.div>

      {/* Component Two: Features */}
      <motion.div
        className={`bg-red-500 w-64 h-64 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg transform transition duration-500 ${
          isActive ? "rotateX-360" : ""
        }`}
        onClick={toggleActive}
        whileHover={{ scale: 1.1 }}
      >
        Features
      </motion.div>

      {/* Component Three: Testimonials */}
      <motion.div
        className={`bg-green-500 w-64 h-64 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg transform transition duration-500 ${
          isActive ? "rotateZ-360" : ""
        }`}
        onClick={toggleActive}
        whileHover={{ scale: 1.1 }}
      >
        Testimonials
      </motion.div>

      {/* Component Four: Pricing */}
      <motion.div
        className={`bg-yellow-500 w-64 h-64 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg transform transition duration-500 ${
          isActive ? "rotateY-360 rotateX-360" : ""
        }`}
        onClick={toggleActive}
        whileHover={{ scale: 1.1 }}
      >
        Pricing
      </motion.div>

      {/* Component Five: Contact */}
      <motion.div
        className={`bg-purple-500 w-64 h-64 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg transform transition duration-500 ${
          isActive ? "rotateX-360 rotateZ-360" : ""
        }`}
        onClick={toggleActive}
        whileHover={{ scale: 1.1 }}
      >
        Contact
      </motion.div>
    </div>
  );
}
