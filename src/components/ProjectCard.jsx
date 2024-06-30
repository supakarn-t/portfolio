import PropTypes from "prop-types";

export default function ProjectCard({ projectName, tag }) {
	return (
		<div className="bg-white rounded-lg overflow-hidden w-60">
			<picture>
				<div className="bg-neutral-300 aspect-square w-60"></div>
			</picture>
			<article className="flex flex-col gap-4 p-4">
				<h3>{projectName}</h3>
				<div className="flex flex-wrap gap-3 text-sm">
					{tag.map((tag, i) => (
						<div key={i} className="px-4 rounded-full bg-sky-200">
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
	tag: PropTypes.array,
};
