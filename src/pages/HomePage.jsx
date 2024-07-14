import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillSection from "../components/home/SkillSection";
import ProjectSection from "../components/home/ProjectSection";

export default function HomePage() {
	return (
		<main className="flex flex-col gap-16 pb-24 px-4 sm:px-8 xl:px-24 min-h-screen">
			<HeroSection />
			<hr className="w-full border-sky-200" />
			<AboutSection />
			<hr className="w-full border-sky-200" />
			<SkillSection />
			<hr className="w-full border-sky-200" />
			<ProjectSection />
		</main>
	);
}
