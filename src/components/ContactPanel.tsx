import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:giri@example.com", display: "giri@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/giridharan", display: "github.com/giridharan" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/giridharan", display: "linkedin.com/in/giridharan" },
];

const ContactPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="frame-glow rounded-lg p-6 md:p-8 bg-card/40 backdrop-blur-sm"
    >
      <h3 className="text-primary font-display text-lg md:text-xl font-semibold mb-6 tracking-wide text-glow-violet">
        Get in Touch
      </h3>
      <div className="space-y-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group text-muted-foreground hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            whileHover={{ x: 4 }}
          >
            <c.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
            <span className="font-mono text-sm">{c.display}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactPanel;