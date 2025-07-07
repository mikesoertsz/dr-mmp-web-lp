import { motion } from "framer-motion";
import { Play } from "lucide-react";
import React from "react";

export type PlayButtonProps = {
  isHovered: boolean;
  className?: string;
};

export default function PlayButton({ isHovered, className }: PlayButtonProps) {
  return (
    <motion.div
      className={
        "absolute bottom-8 right-8 z-30 flex items-center justify-center " +
        (className || "")
      }
      initial={{ rotate: 0 }}
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 2, loop: Infinity }}
    >
      <svg className="absolute" width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="white"
          strokeWidth="2"
          fill="none"
          className="opacity-50"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="113"
          strokeDashoffset="113"
          animate={{ strokeDashoffset: isHovered ? 0 : 113 }}
          transition={{ duration: 2, ease: "linear" }}
        />
      </svg>
      <Play size={24} className="text-white" />
    </motion.div>
  );
}
