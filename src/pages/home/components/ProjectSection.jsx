import ProjectCardHome from "./ProjectCardHome";
import { Link } from "react-router-dom";

export default function ProjectSection() {
	const projectList = [
		{
			projectName: "Elviro Furniture Shop",
			description:
				"E-commerce web application using the MERN stack (MongoDB, Express.js, React, Node.js) for the development. Collaborated with a team of 4 developers, holding regular scrum meetings and using version control with Git to ensure smooth integration of code.",
			github: "https://github.com/supakarn-t/elviro-frontend",
			link: "https://elviro-frontend.vercel.app/",
			tag: ["JavaScript", "React", "TailwindCSS"],
			image: "elviro.png",
		},
		{
			projectName: "Classify Galaxy by Support Vector Machine",
			description:
				"Mahidol University Astrophysics Laboratory Internship & Final Project.",
			github: "https://github.com/supakarn-t/Classify-Galaxy-by-SVM",
			link: "",
			tag: ["Python", "Machine Learning", "SVM"],
			image: "galaxy.jpg",
		},
	];

	return (
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
	);
}
