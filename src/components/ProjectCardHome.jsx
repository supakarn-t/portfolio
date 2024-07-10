import PropTypes from "prop-types";

export default function ProjectCardHome({ projectName, tag }) {
	return (
		<div className="flex bg-white rounded-lg overflow-hidden h-60 hover:shadow-lg hover:scale-105">
			<picture>
				<div className="bg-neutral-300 aspect-square w-60"></div>
			</picture>
			<article className="flex flex-col justify-between gap-4 p-4">
				<article className="flex flex-col gap-4">
					<h3>{projectName}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
						tenetur ad commodi dolorem atque et odio, suscipit enim facilis,
						unde aliquid repellendus fugit. Aliquam provident dolorem voluptatum
						temporibus eveniet ad!
					</p>
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

ProjectCardHome.propTypes = {
	projectName: PropTypes.string,
	tag: PropTypes.array,
};
