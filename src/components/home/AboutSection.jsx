import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function AboutSection() {
	return (
		<section className="flex flex-col items-center gap-8">
			<h2>About Me</h2>
			<div className="flex flex-col md:flex-row items-center gap-16">
				<img src="messy-bun.svg" alt="Coding" className="w-2/3 md:w-1/3" />
				<div className="md:w-2/3 flex flex-col gap-8">
					<p>
						As a software developer with a background in physics, I have a deep
						enthusiasm for logic, reasoning, and analytical thinking. I am
						proficient in full-stack development, with hands-on experience in
						JavaScript, Node.js, Express, MongoDB, and React. I excel in
						creating user-friendly applications, managing databases, and leading
						Agile projects. My analytical mindset and strategic planning skills
						are enhanced by leadership roles in university clubs and competitive
						Thai chess. Recognized for systematic thinking and effective
						communication, I am eager to start a career in technology, using my
						problem-solving passion to drive innovative solutions.
					</p>
					<div className="flex justify-start w-full ml-[-16px]">
						<a
							href="https://github.com/supakarn-t"
							target="_blank"
							className="p-4 rounded-full hover:bg-white/60"
						>
							<FaGithub className="text-4xl" />
						</a>
						<a
							href="https://www.linkedin.com/in/supakarn-t/"
							target="_blank"
							className="p-4 rounded-full hover:bg-white/60"
						>
							<FaLinkedin className="text-4xl" />
						</a>
						<a
							href="mailto:supakarn.tangsiri@gmail.com"
							target="_blank"
							className="p-4 rounded-full hover:bg-white/60"
						>
							<FaEnvelope className="text-4xl" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
