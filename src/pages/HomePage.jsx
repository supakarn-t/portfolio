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
} from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import ProjectCardHome from "../components/ProjectCardHome";

export default function HomePage() {
	return (
		<>
			<section className="flex h-screen">
				<section className="flex flex-col gap-8 my-auto justify-center w-1/2">
					<p className="text-xl font-semibold">Welcome to my portfolio</p>
					<h1 className="leading-tight">
						Hi I&apos;m Supakarn <br /> Tangsirivatthanavong, <br /> a Software
						Engineer
					</h1>
					<button className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit">
						<RxDownload /> Download My CV
					</button>
				</section>
				<img src="Hand coding-rafiki.svg" alt="Coding" className="w-1/2" />
			</section>

			<hr className="w-full border-white" />

			<section id="about" className="flex items-center gap-16">
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
							className="p-4 rounded-full hover:bg-white/60"
						>
							<FaGithub className="text-4xl" />
						</a>
						<a
							href="https://github.com/supakarn-t"
							className="p-4 rounded-full hover:bg-white/60"
						>
							<FaLinkedin className="text-4xl" />
						</a>
					</div>
				</div>
			</section>

			<hr className="w-full border-white" />

			<section id="skill" className="flex flex-col items-center gap-8">
				<h2>Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaHtml5 className="text-7xl" />
						<p>HTML</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaCss3Alt className="text-7xl" />
						<p>CSS</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<SiTailwindcss className="text-7xl" />
						<p>Tailwind CSS</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaSquareJs className="text-7xl" />
						<p>JavaScript</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaReact className="text-7xl" />
						<p>React</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaFigma className="text-7xl" />
						<p>Figma</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaNodeJs className="text-7xl" />
						<p>Node.js</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<SiExpress className="text-7xl" />
						<p>Express</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<SiMongodb className="text-7xl" />
						<p>MongoDB</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<DiSqllite className="text-7xl" />
						<p>SQLite</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white/50">
						<FaGitAlt className="text-7xl" />
						<p>Git</p>
					</div>
				</div>
			</section>

			<hr className="w-full border-white" />

			<section id="project" className="flex flex-col items-center gap-8">
				<h2>Project</h2>
				<div className="flex flex-col gap-8 justify-items-center w-full">
					<ProjectCardHome
						projectName="Simon Game"
						tag={["React", "JavaScript"]}
					/>
					<ProjectCardHome
						projectName="JS Ass"
						tag={["HTML", "TailwindCSS", "JavaScript"]}
					/>
					<ProjectCardHome
						projectName="React Ass"
						tag={["React", "JavaScript"]}
					/>
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
