import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillSection from "../components/home/SkillSection";
import ProjectSection from "../components/home/ProjectSection";

export default function HomePage() {
	return (
		<main className="flex flex-col gap-16 pb-24 px-4 sm:px-8 xl:px-24 min-h-screen">
			<HeroSection />
			<hr id="about" className="w-full border-sky-200" />
			<AboutSection />
			<hr id="skill" className="w-full border-sky-200" />
			<SkillSection />
			<hr id="project" className="w-full border-sky-200" />
			<ProjectSection />
		</main>
	);
}
