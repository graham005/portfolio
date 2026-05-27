/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const VARIANTS = [
  {
    name: 'fade',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.45 },
  },
  {
    name: 'slideLeft',
    initial: { x: 80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -80, opacity: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  {
    name: 'slideRight',
    initial: { x: -80, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 80, opacity: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  {
    name: 'scale',
    initial: { scale: 0.98, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.98, opacity: 0 },
    transition: { duration: 0.45 },
  },
  {
    name: 'flip',
    initial: { rotateY: 25, opacity: 0, perspective: 800 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -25, opacity: 0 },
    transition: { duration: 0.55 },
  },
  {
    name: 'rise',
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -24, opacity: 0 },
    transition: { duration: 0.5 },
  },
];

const PageTransition = ({ children }) => {
  const chosen = useMemo(() => VARIANTS[Math.floor(Math.random() * VARIANTS.length)], []);

  return (
    <motion.div
      initial={chosen.initial}
      animate={chosen.animate}
      exit={chosen.exit}
      transition={chosen.transition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;