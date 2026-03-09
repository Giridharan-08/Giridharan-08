import { motion } from "framer-motion";
import { Camera, Circle, UtensilsCrossed } from "lucide-react";

const interests = [
  {
    icon: Camera,
    label: "Photography",
    description: "Capturing small moments most people walk past.",
  },
  {
    icon: Circle,
    label: "Football",
    description: "Where competition, discipline, and adrenaline meet.",
  },
  {
    icon: UtensilsCrossed,
    label: "Cooking",
    description: "Experimenting in the kitchen — sometimes a masterpiece, sometimes a lesson.",
  },
];

const InterestsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="frame-glow rounded-lg p-6 md:p-8 bg-card/40 backdrop-blur-sm"
    >
      <h3 className="text-primary font-display text-lg md:text-xl font-semibold mb-6 tracking-wide">
        Beyond Code
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {interests.map((item, i) => (
          <motion.div
            key={item.label}
            className="group text-center p-4 rounded-lg hover:bg-secondary/30 transition-all duration-500 cursor-default"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15 }}
            whileHover={{ y: -4 }}
          >
            <item.icon className="w-8 h-8 mx-auto mb-3 text-primary/60 group-hover:text-primary transition-colors duration-300" />
            <p className="font-display font-medium text-foreground mb-1">{item.label}</p>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InterestsSection;
