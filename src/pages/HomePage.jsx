import { DiSqllite } from "react-icons/di";
import {
	FaHtml5,
	FaCss3Alt,
	FaSquareJs,
	FaReact,
	FaFigma,
	FaGitAlt,
	FaNodeJs,
	FaGithub,
	FaLinkedin,
	FaEnvelope,
} from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import ProjectCardHome from "../components/ProjectCardHome";

export default function HomePage() {
	const projectList = [
		{
			projectName: "Elviro Furniture Shop",
			description: "",
			github: "https://github.com/supakarn-t/elviro-frontend",
			link: "https://elviro-frontend.vercel.app/",
			tag: ["React", "JavaScrip", "TailwindCSS"],
			image: "Elviro.png",
		},
		{
			projectName: "Classify Galaxy by Support Vector Machine",
			description: "",
			github: "https://github.com/supakarn-t/Classify-Galaxy-by-SVM",
			link: "",
			tag: ["Python", "Machine Learning", "SVM"],
			image: "Classify-Galaxy.jpeg",
		},
	];

	return (
		<>
			<section className="flex h-screen">
				<section className="flex flex-col gap-8 my-auto justify-center lg:w-1/2">
					<p className="text-xl font-semibold">Welcome to my portfolio</p>
					<h1 className="leading-tight text-2xl sm:text-4xl md:text-6xl">
						Hi I&apos;m Supakarn <br /> Tangsirivatthanavong, <br /> a Software
						Engineer
					</h1>
					<button className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit">
						<RxDownload /> Download My CV
					</button>
				</section>
				<img
					src="Hand coding-rafiki.svg"
					alt="Coding"
					className="w-1/2 hidden lg:flex"
				/>
			</section>

			<hr className="w-full border-white" />

			<section
				id="about"
				className="flex flex-col md:flex-row items-center gap-16"
			>
				<img src="messy bun-bro.svg" alt="Coding" className="w-1/3" />
				<div className="w-2/3 flex flex-col gap-8">
					<h2>About Me</h2>
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
			</section>

			<hr className="w-full border-white" />

			<section id="skill" className="flex flex-col items-center gap-8">
				<h2>Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaHtml5 className="text-7xl" />
						<p>HTML</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaCss3Alt className="text-7xl" />
						<p>CSS</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<SiTailwindcss className="text-7xl" />
						<p>Tailwind CSS</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaSquareJs className="text-7xl" />
						<p>JavaScript</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaReact className="text-7xl" />
						<p>React</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaFigma className="text-7xl" />
						<p>Figma</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaNodeJs className="text-7xl" />
						<p>Node.js</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<SiExpress className="text-7xl" />
						<p>Express</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<SiMongodb className="text-7xl" />
						<p>MongoDB</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<DiSqllite className="text-7xl" />
						<p>SQLite</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/60">
						<FaGitAlt className="text-7xl" />
						<p>Git</p>
					</div>
				</div>
			</section>

			<hr className="w-full border-white" />

			<section id="project" className="flex flex-col items-center gap-8">
				<h2>Project</h2>
				<div className="flex flex-col gap-8 justify-items-center w-full">
					{projectList.map((project, index) => (
						<ProjectCardHome
							key={index}
							projectName={project.projectName}
							description={project.description}
							link={project.link}
							github={project.github}
							tag={project.tag}
							image={project.image}
						/>
					))}
				</div>
				<Link
					to="/project"
					className="btn bg-white btn-translate flex items-center gap-2 px-8 py-3 w-fit"
				>
					All project
				</Link>
			</section>
		</>
	);
}
