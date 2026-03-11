import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const milestones = [
	{
		year: "2020 March",
		title: "10th Grade",
		detail: "Scored 95.6%",
		resultUrl: "https://www.facebook.com/p/Elite-Matriculation-Higher-Secondary-School-100084051998971/",
	},
	{
		year: "2022 May",
		title: "12th Grade — Computer Science",
		detail: "Scored 90.3%",
		resultUrl: "https://www.facebook.com/p/Elite-Matriculation-Higher-Secondary-School-100084051998971/",
	},
	{
		year: "2022 July",
		title: "Zoho Schools of Learning, 1st Year",
		detail: "3 Rounds of aptitude & math-based interviews",
		resultUrl: "https://www.zohoschools.com/",
	},
	{
		year: "2023 April",
		title: "Zoho Schools of Learning, 2nd Year",
		detail: "Started working on live products after 1 year of training",
		resultUrl: "https://www.zohoschools.com/",
	},
	{
		year: "2024 July",
		title: "Member Technical Staff — Zoho",
		detail: "Full-time role · Currently working here",
		resultUrl: "https://en.wikipedia.org/wiki/Zoho_Corporation",
	},
	{
		year: "2024 August",
		title: "Started BCA Degree in Data Science (Correspondence)",
		detail: "Currently pursuing alongside full-time work",
		resultUrl: "https://www.srmonline.in/",
	},
];

const JourneySection = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.8, delay: 0.15 }}
			className="frame-glow rounded-lg p-6 md:p-8 bg-card/40 backdrop-blur-sm"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<motion.h3
				className="text-primary font-display text-lg md:text-2xl font-black leading-none mb-6 uppercase"
				style={{
					fontFamily:
						"'Melody Variable', 'Melody', Impact, Haettenschweiler, 'Arial Black', 'Anton', sans-serif",
				}}
				animate={{ textShadow: isHovered ? "0 0 20px hsl(270 90% 65% / 0.6)" : "0 0 0px transparent" }}
				transition={{ duration: 0.4 }}
			>
				<span className="text-[1.2em] align-baseline">T</span>HE JOURNEY
			</motion.h3>

			<div className="relative pl-6 border-l border-border">
				{milestones.map((m, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, x: -10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 + i * 0.1 }}
						className="group mb-6 last:mb-0 relative"
					>
						{/* dot */}
						<div className="absolute -left-[calc(1.5rem+4.5px)] top-1.5 w-[9px] h-[9px] rounded-full bg-primary/60 border-2 border-background" />
						<span className="font-mono text-xs text-primary/70 tracking-wider">
							{m.year}
						</span>
						<p className="font-display font-medium text-foreground text-sm md:text-base mt-0.5">
							{m.title}
						</p>
						<div className="flex items-center gap-2 mt-0.5">
							<p className="text-muted-foreground text-sm">{m.detail}</p>
							{m.resultUrl ? (
								<a
									href={m.resultUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-all duration-200"
									aria-label={`Open result link for ${m.title}`}
									title="Open result page"
								>
									<ExternalLink className="w-4 h-4" />
								</a>
							) : null}
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default JourneySection;
