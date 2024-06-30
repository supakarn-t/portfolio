import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {
	return (
		<section className="flex flex-col items-center gap-8">
			<h2 id="project">Project</h2>
			<section className="grid grid-cols-3 gap-8 justify-items-center w-fit">
				<ProjectCard
					projectName="Elviro"
					tag={["React", "JavaScript", "Node.js", "Express", "MongoDB"]}
				/>
			</section>

			<hr className="w-full border-white" />

			<h2 id="project">Mini Project</h2>
			<section className="grid grid-cols-3 gap-8 justify-items-center w-fit">
				<ProjectCard projectName="Simon Game" tag={["React", "JavaScript"]} />
				<ProjectCard
					projectName="JS Ass"
					tag={["HTML", "TailwindCSS", "JavaScript"]}
				/>
				<ProjectCard projectName="React Ass" tag={["React", "JavaScript"]} />
			</section>
		</section>
	);
}
