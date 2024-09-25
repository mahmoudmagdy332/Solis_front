import React, { FC } from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  direction: "up" | "down" | "left" | "right" | "none";
  transition: number;
  children: React.ReactNode;
  duration?: number;
}

const FadeEffect: FC<Props> = ({ children, transition, direction, duration = 0.6 }) => {
  const list: Variants = {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: duration,
        delay: transition,
        ease: [0.25, 0.75, 0.25, 0.75],
      },
    },
  };
  return (
    <motion.div initial="hidden" whileInView="show" variants={list} viewport={{ once: true, amount: 0.1 }}>
      {children}
    </motion.div>
  );
};

export default FadeEffect;
