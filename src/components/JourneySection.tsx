import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "10th Grade",
    detail: "Scored 478/500",
  },
  {
    year: "2022",
    title: "12th Grade — Computer Science",
    detail: "Scored 542/600",
  },
  {
    year: "2022",
    title: "Joined Zoho Schools of Learning",
    detail: "Cleared aptitude & math-based interviews (3 rounds)",
  },
  {
    year: "2023",
    title: "Placed in a Zoho Team",
    detail: "Started working on live products after 1 year of training",
  },
  {
    year: "Jul 2024",
    title: "Member Technical Staff — Zoho",
    detail: "Full-time role · Currently working here",
  },
];

const JourneySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="frame-glow rounded-lg p-6 md:p-8 bg-card/40 backdrop-blur-sm"
    >
      <h3 className="text-primary font-display text-lg md:text-xl font-semibold mb-6 tracking-wide">
        The Journey
      </h3>

      <div className="relative pl-6 border-l border-border">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="mb-6 last:mb-0 relative"
          >
            {/* dot */}
            <div className="absolute -left-[calc(1.5rem+4.5px)] top-1.5 w-[9px] h-[9px] rounded-full bg-primary/60 border-2 border-background" />
            <span className="font-mono text-xs text-primary/70 tracking-wider">{m.year}</span>
            <p className="font-display font-medium text-foreground text-sm md:text-base mt-0.5">{m.title}</p>
            <p className="text-muted-foreground text-sm mt-0.5">{m.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default JourneySection;