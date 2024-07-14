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
	const skillList = [
		{
			icon: <FaHtml5 className="text-7xl" />,
			iconName: "HTML",
		},
		{
			icon: <FaCss3Alt className="text-7xl" />,
			iconName: "CSS",
		},
		{
			icon: <SiTailwindcss className="text-7xl" />,
			iconName: "Tailwind CSS",
		},
		{
			icon: <FaSquareJs className="text-7xl" />,
			iconName: "JavaScript",
		},
		{
			icon: <FaReact className="text-7xl" />,
			iconName: "React",
		},
		{
			icon: <FaFigma className="text-7xl" />,
			iconName: "Figma",
		},
		{
			icon: <FaNodeJs className="text-7xl" />,
			iconName: "Node.js",
		},
		{
			icon: <SiExpress className="text-7xl" />,
			iconName: "Express",
		},
		{
			icon: <SiMongodb className="text-7xl" />,
			iconName: "MongoDB",
		},
		{
			icon: <DiSqllite className="text-7xl" />,
			iconName: "SQLite",
		},
		{
			icon: <FaGitAlt className="text-7xl" />,
			iconName: "Git",
		},
	];

	return (
		<section id="skill" className="flex flex-col items-center gap-8">
			<h2>Skills</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
				{skillList.map((skill, index) => (
					<div
						key={index}
						className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white"
					>
						{skill.icon}
						<p>{skill.iconName}</p>
					</div>
				))}
			</div>
		</section>
	);
}
