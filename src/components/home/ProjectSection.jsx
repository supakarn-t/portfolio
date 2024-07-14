import ProjectCardHome from "./ProjectCardHome";
import { Link } from "react-router-dom";

export default function ProjectSection() {
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
