"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
};

export function Reveal({ children, className, immediate = false }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={immediate ? undefined : { once: true, amount: 0.25 }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
