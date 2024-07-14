import { DiSqllite } from "react-icons/di";
import {
	FaCss3Alt,
	FaFigma,
	FaGitAlt,
	FaHtml5,
	FaNodeJs,
	FaReact,
	FaSquareJs,
} from "react-icons/fa6";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function SkillSection() {
	return (
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
	);
}
