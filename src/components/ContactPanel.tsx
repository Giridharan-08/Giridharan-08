import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Instagram, Copy, ExternalLink } from "lucide-react";

const contacts = [
	{
		icon: Mail,
		label: "Email",
		href: "mailto:giridharanvichu@gmail.com",
		display: "giridharanvichu@gmail.com",
		copyValue: "giridharanvichu@gmail.com",
	},
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/Giridharan-08",
		display: "github.com/Giridharan-08",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/giridharan-s-030225244/",
		display: "linkedin.com/in/giridharan-s-030225244",
	},
	{
		icon: Instagram,
		label: "Instagram",
		href: "https://www.instagram.com/sparkxz_08/",
		display: "instagram.com/sparkxz_08",
	},
];

const ContactPanel = () => {
	const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
	const resetTimerRef = useRef<number | null>(null);

	const handleCopy = async (value: string, label: string) => {
		if (navigator?.clipboard?.writeText) {
			await navigator.clipboard.writeText(value);
		} else {
			const fallback = document.createElement("textarea");
			fallback.value = value;
			fallback.style.position = "fixed";
			fallback.style.opacity = "0";
			document.body.appendChild(fallback);
			fallback.select();
			document.execCommand("copy");
			document.body.removeChild(fallback);
		}

		setCopiedLabel(label);
		if (resetTimerRef.current) {
			window.clearTimeout(resetTimerRef.current);
		}
		resetTimerRef.current = window.setTimeout(() => {
			setCopiedLabel(null);
		}, 1200);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, delay: 0.3 }}
			className="frame-glow rounded-lg p-6 md:p-8 bg-card/40 backdrop-blur-sm"
		>
			<h3 className="text-primary font-display text-lg md:text-2xl font-semibold uppercase tracking-[0.18em] mb-6 text-glow-violet">
				Get in Touch
			</h3>
			<div className="space-y-4">
				{contacts.map((c, i) => {
					const isEmail = c.href.startsWith("mailto:");
					const showCopied = copiedLabel === c.label;
					const copyValue = c.copyValue ?? c.href;
					return (
						<motion.div
							key={c.label}
							className="group"
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 + i * 0.1 }}
						>
							<div className="flex items-center gap-3">
								<a
									href={c.href}
									target={isEmail ? undefined : "_blank"}
									rel={isEmail ? undefined : "noopener noreferrer"}
									className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
								>
									<c.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
									<span className="font-mono text-sm">{c.display}</span>
								</a>
								<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
									<div className="relative">
										<button
											type="button"
											onClick={() => handleCopy(copyValue, c.label)}
											className="text-muted-foreground hover:text-primary transition-colors"
											aria-label={`Copy ${c.label} link`}
											title="Copy link"
										>
											<Copy className="w-4 h-4" />
										</button>
										<span
											className={`pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-mono text-secondary-foreground shadow-sm transition-opacity duration-300 ${
												showCopied ? "opacity-100" : "opacity-0"
											}`}
										>
											Copied
										</span>
									</div>
									<a
										href={c.href}
										target={isEmail ? undefined : "_blank"}
										rel={isEmail ? undefined : "noopener noreferrer"}
										className="text-muted-foreground hover:text-primary transition-colors"
										aria-label={`Open ${c.label} link`}
										title="Open link"
									>
										<ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default ContactPanel;

