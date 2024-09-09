import { RxDownload } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function HeroSection() {
	return (
		<section id="hero" className="flex h-screen">
			<section className="flex flex-col gap-6 my-auto justify-center lg:w-1/2">
				<h1 className="text-3xl">
					Hi, I am{" "}
					<span className="font-bold">Supakarn Tangsirivatthanavong</span>
				</h1>
				<h1 className="text-6xl md:text-8xl font-bold font-outline">
					Fullstack <br />
					Developer
				</h1>
				<div className="flex gap-4">
					<a
						href="https://drive.google.com/file/d/1P9H8zAjWVBk0tnEnMQFx-8YNXGPtdDAI/view?usp=sharing"
						target="_blank"
						className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit mt-4"
					>
						<RxDownload /> Download My CV
					</a>
					<Link
						to="/project"
						className="btn bg-sky-200 btn-translate flex items-center gap-2 py-3 w-fit mt-4"
					>
						View All Project
					</Link>
				</div>
			</section>
			<img
				src="code-typing.svg"
				alt="Coding"
				className="w-1/2 hidden lg:flex"
			/>
		</section>
	);
}
