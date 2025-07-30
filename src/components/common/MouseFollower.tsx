import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-50">
      <motion.div
        className={`cursor-outer  `}
        style={{ left: mouseX, top: mouseY }}
      />
    </div>
  );
};

export default MouseFollower;
