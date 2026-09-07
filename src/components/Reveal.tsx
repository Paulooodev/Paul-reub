"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({
  children,
  delay = 0, 
  className   
}: {
  children: ReactNode;
  delay?: number;    
}) {
    return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      className={className} 
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}  
    </motion.div>
    );
}