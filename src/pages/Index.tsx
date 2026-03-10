import FloatingParticles from "@/components/FloatingParticles";
import RoomHero from "@/components/RoomHero";
import GlowFrame from "@/components/GlowFrame";
import JourneySection from "@/components/JourneySection";
import InterestsSection from "@/components/InterestsSection";
import ContactPanel from "@/components/ContactPanel";

const skills = [
	"Backend Engineering",
	"System Design",
	"API Architecture",
	"Data Modeling",
	"Database Architecture",
	"Caching Strategies",
	"Performance Optimization",
	"Scalable System Design",
	"Distributed Systems Thinking",
];

const Index = () => {
	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<FloatingParticles />

			{/* Hero / Room */}
			<RoomHero />

			{/* Frames Section */}
			<section className="relative z-20 max-w-5xl mx-auto px-6 py-20 md:py-32 space-y-12">
				{/* About */}
				<GlowFrame title="About Me" delay={0}>
					<div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
						<p>Hi, I'm Giri.</p>
						<p>
							I'm a backend developer who spends most of the day convincing
							servers, databases, and APIs to cooperate with each other.
							Sometimes they listen. Sometimes they don't. We work through it.
						</p>
						<p>
							I enjoy building systems that are simple, scalable, and don't
							randomly break at 2 AM — though life as a developer has other plans
							sometimes.
						</p>
						<p>
							When I'm not staring at logs or debugging something that worked
							perfectly five minutes ago, you'll probably find me on a football
							field, taking photos of random things that look aesthetic, or
							experimenting in the kitchen.
						</p>
						<p>
							Nothing fancy here. Just someone who likes building things, learning
							constantly, and occasionally questioning why a missing semicolon can
							ruin an entire day.
						</p>
					</div>
				</GlowFrame>

				{/* Journey */}
				<JourneySection />

				{/* Skills */}
				<GlowFrame title="What I Do" delay={0.1}>
					<div className="flex flex-wrap justify-center gap-3 text-center">
						{skills.map((skill) => (
							<span
								key={skill}
								className="font-mono text-sm px-4 py-2 rounded-md bg-secondary/50 text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
							>
								{skill}
							</span>
						))}
					</div>
				</GlowFrame>

				{/* Interests */}
				<InterestsSection />

				{/* Contact */}
				<ContactPanel />

				{/* Footer */}
				<div className="text-center pt-12 pb-8">
					<p className="font-mono text-xs text-muted-foreground/50 tracking-widest">
						© {new Date().getFullYear()} · Giridharan
					</p>
				</div>
			</section>
		</div>
	);
};

export default Index;

