import PropTypes from "prop-types";

export default function Tag({ tag }) {
	return (
		<div className="flex flex-wrap gap-3 text-sm">
			{tag.map((tag, i) => (
				<p key={i} className="px-4 rounded-full bg-sky-200 hover:shadow-md">
					{tag}
				</p>
			))}
		</div>
	);
}

Tag.propTypes = {
	tag: PropTypes.array,
};
