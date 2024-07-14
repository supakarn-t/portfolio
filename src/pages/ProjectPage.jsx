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
			tag: ["Python", "Machine Learning", "SVM"],
			image: "Classify-Galaxy.jpeg",
		},
	];

	const miniProjectList = [
		{
			projectName: "Simon Game",
			github: "https://github.com/supakarn-t/simon-game",
			link: "https://supakarn-t-simon-game.vercel.app/",
			tag: ["React", "TailwindCSS", "JavaScript"],
			image: "Simon-game.png",
		},
		{
			projectName: "React",
			github: "https://github.com/supakarn-t/31-vicky-react",
			link: "https://31-vicky-react.vercel.app/",
			tag: ["React", "TailwindCSS", "JavaScript"],
			image: "React-Assessment.png",
		},
		{
			projectName: "JavaScript E-commerce Assessment",
			github: "https://github.com/supakarn-t/31-vicky-js",
			link: "https://31-vicky-js.vercel.app/",
			tag: ["HTML", "TailwindCSS", "JavaScript"],
			image: "JS-Assessment.png",
		},
		{
			projectName: "Colmar",
			github: "https://github.com/supakarn-t/colmar_with_tailwind",
			link: "https://colmar-with-tailwind.vercel.app/",
			tag: ["HTML", "TailwindCSS"],
			image: "Colmar.png",
		},
	];

	return (
		<section className="flex flex-col items-center gap-8 mt-24">
			<h2>Project</h2>
			<section className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-3/4">
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
			<section className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-3/4">
				{miniProjectList.map((project, index) => (
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
		</section>
	);
}
