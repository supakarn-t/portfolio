import PropTypes from "prop-types";
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6";

export default function ProjectCard({ projectName, link, github, tag, image }) {
	return (
		<div className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:scale-105">
			<picture>
				<img
					src={image}
					alt={projectName}
					className="object-cover aspect-square"
				/>
			</picture>
			<article className="flex flex-col justify-between gap-8 p-4">
				<article className="flex flex-col gap-4">
					<h3>{projectName}</h3>
					<div className="flex gap-4">
						<a href={github} target="_blank">
							<FaGithub />
						</a>
						{link ? (
							<a href={link} target="_blank">
								<FaUpRightFromSquare />
							</a>
						) : null}
					</div>
				</article>
				<div className="flex flex-wrap gap-3 text-sm">
					{tag.map((tag, i) => (
						<div
							key={i}
							className="px-4 rounded-full bg-sky-200 hover:shadow-md"
						>
							{tag}
						</div>
					))}
				</div>
			</article>
		</div>
	);
}

ProjectCard.propTypes = {
	projectName: PropTypes.string,
	link: PropTypes.string,
	github: PropTypes.string,
	tag: PropTypes.array,
	image: PropTypes.string,
};
