import PropTypes from "prop-types";
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6";

export default function ProjectCardHome({
	projectName,
	description,
	link,
	github,
	tag,
	image,
}) {
	return (
		<div className="flex gap-4 bg-white rounded-lg overflow-hidden min-h-60 hover:shadow-lg hover:scale-105">
			<picture className="hidden md:flex w-1/3 rounded-lg overflow-hidden border hover:shadow-lg m-4">
				<img src={image} alt={projectName} className="object-cover w-full" />
			</picture>
			<article className="flex flex-col justify-between gap-4 p-4 w-2/3">
				<article className="flex flex-col gap-4">
					<h3>{projectName}</h3>
					<p className="text-base">{description}</p>
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

ProjectCardHome.propTypes = {
	projectName: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	github: PropTypes.string,
	tag: PropTypes.array,
	image: PropTypes.string,
};
