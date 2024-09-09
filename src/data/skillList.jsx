import { BiLogoTypescript } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import {
	FaCss3Alt,
	FaFigma,
	FaGitAlt,
	FaGolang,
	FaHtml5,
	FaNodeJs,
	FaPython,
	FaReact,
	FaSquareJs,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skillList = [
	{
		icon: <FaSquareJs className="text-7xl" />,
		iconName: "JavaScript",
	},
	{
		icon: <BiLogoTypescript className="text-[80px]" />,
		iconName: "TypeScript",
	},
	{
		icon: <FaGolang className="text-7xl" />,
		iconName: "Golang",
	},
	{
		icon: <FaPython className="text-7xl" />,
		iconName: "Python",
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
		icon: <FaReact className="text-7xl" />,
		iconName: "React",
	},
	{
		icon: <RiNextjsFill className="text-7xl" />,
		iconName: "Next.js",
	},
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
		icon: <FaGitAlt className="text-7xl" />,
		iconName: "Git",
	},
	{
		icon: <FaFigma className="text-7xl" />,
		iconName: "Figma",
	},
];

export default skillList;
