import { motion } from "framer-motion";
import roomBg from "@/assets/room-bg.jpg";

const RoomHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Room background */}
      <div className="absolute inset-0">
        <img
          src={roomBg}
          alt="Giri's workspace at night"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-glow-violet"
          style={{ fontFamily: "var(--font-cinematic)" }}
        >
          Giridharan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl font-light tracking-wide"
        >
          Backend Developer
        </motion.p>

      </div>

      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default RoomHero;