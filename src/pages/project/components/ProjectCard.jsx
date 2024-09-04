import PropTypes from "prop-types";
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6";
import Tag from "../../../components/Tag";

export default function ProjectCard({
	projectName,
	link,
	github,
	tag,
	image,
	description,
}) {
	return (
		<div className="relative group block h-auto rounded-lg overflow-hidden shadow-lg">
			<img
				src={image}
				alt={projectName}
				className="h-full w-full object-cover opacity-100 transition-opacity "
			/>

			<div className="absolute inset-0 flex items-end h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-transparent via-black/45 to-black/70 opacity-0 group-hover:opacity-100">
				<article className="flex flex-col gap-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
					<h3 className="text-white">{projectName}</h3>
					{description ? (
						<p className="text-sm text-white">{description}</p>
					) : null}
					<div className="flex gap-4">
						<a href={github} target="_blank">
							<FaGithub className="text-white" />
						</a>
						{link ? (
							<a href={link} target="_blank">
								<FaUpRightFromSquare className="text-white" />
							</a>
						) : null}
					</div>
					<Tag tag={tag} />
				</article>
			</div>
		</div>
	);
}

ProjectCard.propTypes = {
	projectName: PropTypes.string,
	link: PropTypes.string,
	github: PropTypes.string,
	tag: PropTypes.array,
	image: PropTypes.string,
	description: PropTypes.string,
};
