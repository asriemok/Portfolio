// src/components/AnimatedComponent.js
import React from 'react';
import { motion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Animated Component</h1>
    </motion.div>
  );
}

export default AnimatedComponent;
