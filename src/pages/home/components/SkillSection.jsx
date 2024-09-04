import skillList from "../../../data/skillList.jsx";

export default function SkillSection() {
	return (
		<section id="skill" className="flex flex-col items-center gap-8">
			<h2>Skills</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
				{skillList.map((skill, index) => (
					<div
						key={index}
						className="flex flex-col justify-center items-center border border-black p-8 hover:bg-white"
					>
						{skill.icon}
						<p>{skill.iconName}</p>
					</div>
				))}
			</div>
		</section>
	);
}
