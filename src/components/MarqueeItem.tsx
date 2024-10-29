"use client";
import React from "react";
import { motion } from "framer-motion";

// Define the props type
interface MarqueeItemProps {
  images: string[];
  from: string | number;
  to: string | number;
  textSize?: string; // Optional prop for text size customization
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ images, from, to, textSize = "text-3xl" }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <div key={index} className={`h-full py-2  pr-20 lg:text-3xl hover:text-purple-400 ${textSize}`}>
            {image}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <div key={index} className={`h-full py-2 pr-20 hover:text-purple-400 lg:text-3xl ${textSize}`}>
            {image}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
