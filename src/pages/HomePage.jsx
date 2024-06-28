export default function HomePage() {
	return (
		<section className="flex flex-col gap-8 my-auto justify-center">
			<p>Welcome to my portfolio</p>
			<h1 className="leading-tight">
				Hi I&apos;m Supakarn <br /> Tangsirivatthanavong, <br /> a Software
				Engineer
			</h1>
			<div className="flex gap-8">
				<button className="btn bg-white">Download My CV</button>
				<button className="btn bg-white">See My Projects</button>
			</div>
		</section>
	);
}
