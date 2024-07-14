import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {
	const projectList = [
		{
			projectName: "Elviro Furniture Shop (Frontend)",
			github: "https://github.com/supakarn-t/elviro-frontend",
			link: "https://elviro-frontend.vercel.app/",
			tag: ["React", "JavaScript"],
			image: "Elviro.png",
		},
		{
			projectName: "Elviro Furniture Shop (Backend)",
			github: "https://github.com/supakarn-t/elviro-backend",
			link: "",
			tag: ["JavaScript", "Node.js", "Express", "MongoDB"],
			image: "Elviro.png",
		},
		{
			projectName: "Classify Galaxy by Support Vector Machine",
			github: "https://github.com/supakarn-t/Classify-Galaxy-by-SVM",
			link: "",
			tag: ["Python", "SVM", "Machine Learning"],
			image: "Classify-Galaxy.jpeg",
		},
	];

	const miniProjectList = [
		{
			projectName: "Simon Game",
			github: "https://github.com/supakarn-t/elviro-frontend",
			link: "https://elviro-frontend.vercel.app/",
			tag: ["React", "JavaScript"],
			image: "",
		},
	];

	return (
		<section className="flex flex-col items-center gap-8 mt-24">
			<h2>Project</h2>
			<section className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-fit">
				{projectList.map((project, index) => (
					<ProjectCard
						key={index}
						projectName={project.projectName}
						link={project.link}
						github={project.github}
						tag={project.tag}
						image={project.image}
					/>
				))}
			</section>

			<hr className="w-full border-white" />

			<h2>Mini Project</h2>
			<section className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-fit">
				{miniProjectList.map((project, index) => (
					<ProjectCard
						key={index}
						projectName={project.projectName}
						tag={project.tag}
					/>
				))}
			</section>
		</section>
	);
}
