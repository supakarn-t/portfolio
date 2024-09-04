import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ScrollSpy from "react-ui-scrollspy";

export default function HomePage() {
	return (
		<main className="flex flex-col gap-16 pb-24 px-4 sm:px-8 xl:px-24 min-h-screen">
			<ScrollSpy activeClass="bg-cyan-sky-12" useBoxMethod={false}>
				<HeroSection />
				<hr id="about" className="w-full border-sky-200 my-16" />
				<AboutSection />
				<hr id="skill" className="w-full border-sky-200 my-16" />
				<SkillSection />
				<hr id="project" className="w-full border-sky-200 my-16" />
				<ProjectSection />
			</ScrollSpy>
		</main>
	);
}
