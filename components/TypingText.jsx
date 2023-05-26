import React from "react";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
} from "../utils/motion";

const TypingText = ({ title, styles }) => {
  return (
    <motion.p
      className={`${styles} text-gray-400`}
      variants={textContainer}
      initial="hidden"
      whileInView="show"
    >
      {/* TO GET THE SINGLE CHARACTER FROM STRING */}
      {Array.from(title).map((letter, index) => {
        return (
          <motion.span
            key={index}
            variants={textVariant2}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default TypingText;
