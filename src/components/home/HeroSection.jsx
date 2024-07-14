import { RxDownload } from "react-icons/rx";

export default function HeroSection() {
	return (
		<section className="flex h-screen">
			<section className="flex flex-col gap-8 my-auto justify-center lg:w-1/2">
				<p className="text-xl font-semibold">Welcome to my portfolio</p>
				<h1 className="leading-tight text-2xl sm:text-4xl md:text-6xl">
					Hi I&apos;m Supakarn <br /> Tangsirivatthanavong, <br /> a Software
					Engineer
				</h1>
				<button className="btn bg-white btn-translate flex items-center gap-2 py-3 w-fit">
					<RxDownload /> Download My CV
				</button>
			</section>
			<img
				src="Hand coding-rafiki.svg"
				alt="Coding"
				className="w-1/2 hidden lg:flex"
			/>
		</section>
	);
}
