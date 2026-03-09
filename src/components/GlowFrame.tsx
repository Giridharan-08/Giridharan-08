import { motion } from "framer-motion";
import { useState } from "react";

interface GlowFrameProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const GlowFrame = ({ title, children, delay = 0, className = "" }: GlowFrameProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`frame-glow rounded-lg p-6 md:p-8 bg-card/40 backdrop-blur-sm cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h3
        className="text-primary font-display text-lg md:text-2xl font-semibold uppercase tracking-[0.18em] mb-5 text-glow-violet"
        animate={{ textShadow: isHovered ? "0 0 20px hsl(320 90% 60% / 0.6)" : "0 0 0px transparent" }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h3>
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GlowFrame;