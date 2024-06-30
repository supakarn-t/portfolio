import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<section className="flex flex-col gap-8 my-auto justify-center">
			<p className="text-xl font-semibold">Welcome to my portfolio</p>
			<h1 className="leading-tight">
				Hi I&apos;m Supakarn <br /> Tangsirivatthanavong, <br /> a Software
				Engineer
			</h1>
			<div className="flex gap-8">
				<button className="btn bg-white btn-translate py-3">
					Download My CV
				</button>
				<Link to={"/project"} className="btn bg-white btn-translate py-3">
					See My Projects
				</Link>
			</div>
		</section>
	);
}
