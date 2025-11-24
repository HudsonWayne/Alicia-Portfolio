// FloatingTechIcons.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const ICON_SIZE = 28; // px

const techIcons = [
  { name: "React", Icon: FaReact, delay: 0 },
  { name: "JavaScript", Icon: SiJavascript, delay: 0.5 },
  { name: "TypeScript", Icon: SiTypescript, delay: 1 },
  { name: "Node.js", Icon: SiNodedotjs, delay: 1.5 },
  { name: "MongoDB", Icon: SiMongodb, delay: 2 },
  { name: "Firebase", Icon: SiFirebase, delay: 2.5 },
  { name: "Tailwind", Icon: SiTailwindcss, delay: 3 },
  { name: "Git", Icon: SiGit, delay: 3.5 },
];

function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

const FloatingTechIcons = () => {
  // store precomputed animation paths so they don't change each render
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;

    const newPaths = techIcons.map((_, i) => {
      // create three anchor points (x,y) for smooth looping animation
      const baseX = randRange(0.05 * w, 0.9 * w);
      const baseY = randRange(0.05 * h, 0.85 * h);

      const xPoints = [
        baseX,
        randRange(0.05 * w, 0.95 * w),
        randRange(0.05 * w, 0.95 * w),
      ];
      const yPoints = [
        baseY,
        randRange(0.05 * h, 0.9 * h),
        randRange(0.05 * h, 0.9 * h),
      ];

      return {
        x: xPoints,
        y: yPoints,
        duration: 18 + Math.random() * 14, // 18-32s
        rotate: [0, 180, 360],
      };
    });

    setPaths(newPaths);

    // optionally update paths on resize so floats adapt
    const onResize = () => {
      const w2 = window.innerWidth;
      const h2 = window.innerHeight;
      const resized = techIcons.map((_, i) => {
        const baseX = randRange(0.05 * w2, 0.9 * w2);
        const baseY = randRange(0.05 * h2, 0.85 * h2);
        return {
          x: [baseX, randRange(0.05 * w2, 0.95 * w2), randRange(0.05 * w2, 0.95 * w2)],
          y: [baseY, randRange(0.05 * h2, 0.9 * h2), randRange(0.05 * h2, 0.9 * h2)],
          duration: 18 + Math.random() * 14,
          rotate: [0, 180, 360],
        };
      });
      setPaths(resized);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    // Using a container that covers the viewport but allows pointer events on icons
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {paths.length === techIcons.length &&
        techIcons.map((tech, idx) => {
          const { Icon, name, delay } = tech;
          const path = paths[idx];

          return (
            <motion.div
              key={name}
              // allow pointer events on each icon wrapper so hover works
              className="absolute pointer-events-auto"
              initial={{ x: path.x[0], y: path.y[0], rotate: 0 }}
              animate={{
                x: path.x,
                y: path.y,
                rotate: path.rotate,
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
                delay,
              }}
              style={{
                // center the icon at the transform origin
                translateX: -(ICON_SIZE / 2),
                translateY: -(ICON_SIZE / 2),
              }}
            >
              <div
                className="bg-white/8 backdrop-blur-sm rounded-full p-2 border border-white/20 shadow-sm
                           flex items-center justify-center cursor-default select-none
                           hover:opacity-90 opacity-70 transition-opacity duration-300"
                title={name}
                aria-label={name}
                style={{ width: ICON_SIZE + 12, height: ICON_SIZE + 12 }}
              >
                <Icon size={ICON_SIZE} />
              </div>
            </motion.div>
          );
        })}
    </div>
  );
};

export default FloatingTechIcons;
