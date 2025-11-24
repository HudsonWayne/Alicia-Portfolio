import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        style={{ left: '10%', top: '20%' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-300/15 to-cyan-300/15 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
        style={{ right: '15%', bottom: '25%' }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.025,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 35 }}
        style={{ left: '60%', top: '60%' }}
      />
    </div>
  );
};

export default InteractiveBackground;
