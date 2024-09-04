import ProjectCard from "./components/ProjectCard";
import projectList from "../../data/projectList";

export default function ProjectPage() {
	return (
		<section className="flex flex-col items-center gap-16 pb-24 px-4 xl:px-24 mt-16">
			<h2>Project</h2>
			<section className="lg:columns-2 gap-8 space-y-8 p-4">
				{projectList.map((project, index) => (
					<ProjectCard
						key={index}
						projectName={project.projectName}
						link={project.link}
						github={project.github}
						tag={project.tag}
						image={project.image}
						description={project.description}
					/>
				))}
			</section>
		</section>
	);
}
