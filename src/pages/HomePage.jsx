import { DiSqllite } from "react-icons/di";
import {
	FaHtml5,
	FaCss3Alt,
	FaSquareJs,
	FaReact,
	FaFigma,
	FaGitAlt,
	FaNodeJs,
} from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<section className="flex flex-col gap-8 my-auto justify-center">
				<p className="text-xl font-semibold">Welcome to my portfolio</p>
				<h1 className="leading-tight">
					Hi I&apos;m Supakarn <br /> Tangsirivatthanavong, <br /> a Software
					Engineer
				</h1>
				<button className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit">
					<RxDownload /> Download My CV
				</button>
			</section>

			<section id="about" className="flex flex-col items-center gap-8">
				<h2>About Me</h2>
				<p>
					As a software developer with a background in physics, I have a deep
					enthusiasm for logic, reasoning, and analytical thinking. I am
					proficient in full-stack development, with hands-on experience in
					JavaScript, Node.js, Express, MongoDB, and React. I excel in creating
					user-friendly applications, managing databases, and leading Agile
					projects. My analytical mindset and strategic planning skills are
					enhanced by leadership roles in university clubs and competitive Thai
					chess. Recognized for systematic thinking and effective communication,
					I am eager to start a career in technology, using my problem-solving
					passion to drive innovative solutions.
				</p>
			</section>

			<section id="skill" className="flex flex-col items-center gap-8">
				<h2>Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaHtml5 className="text-7xl" />
						<p>HTML</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaCss3Alt className="text-7xl" />
						<p>CSS</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<SiTailwindcss className="text-7xl" />
						<p>Tailwind CSS</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaSquareJs className="text-7xl" />
						<p>JavaScript</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaReact className="text-7xl" />
						<p>React</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaFigma className="text-7xl" />
						<p>Figma</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaNodeJs className="text-7xl" />
						<p>Node.js</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<SiExpress className="text-7xl" />
						<p>Express</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<SiMongodb className="text-7xl" />
						<p>MongoDB</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<DiSqllite className="text-7xl" />
						<p>SQLite</p>
					</div>
					<div className="flex flex-col justify-center items-center border border-black p-8">
						<FaGitAlt className="text-7xl" />
						<p>Git</p>
					</div>
				</div>
			</section>

			<section id="project">
				<h2>Project</h2>
				<div className="bg-white w-16 aspect-square"></div>
				<Link
					to="/project"
					className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit"
				>
					All project
				</Link>
			</section>
		</>
	);
}
