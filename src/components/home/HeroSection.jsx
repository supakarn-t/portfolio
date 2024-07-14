import { RxDownload } from "react-icons/rx";

export default function HeroSection() {
	return (
		<section className="flex h-screen">
			<section className="flex flex-col gap-6 my-auto justify-center lg:w-1/2">
				<h1 className="text-3xl">
					Hi, I am{" "}
					<span className="font-bold">Supakarn Tangsirivatthanavong</span>
				</h1>
				<h1 className="text-6xl md:text-8xl font-bold font-outline">
					Fullstack <br />
					Developer
				</h1>
				<a
					href="https://drive.google.com/file/d/1lWdvbuf8P_3sHlhcYz_O7sT4YGho__R-/view?usp=sharing"
					target="_blank"
					className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit mt-4"
				>
					<RxDownload /> Download My CV
				</a>
			</section>
			<img
				src="code-typing.svg"
				alt="Coding"
				className="w-1/2 hidden lg:flex"
			/>
		</section>
	);
}
