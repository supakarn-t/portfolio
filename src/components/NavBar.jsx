export default function NavBar() {
	return (
		<nav className="w-fit fixed top-4 right-4">
			<ul className="flex gap-4 bg-white w-fit p-4 rounded-full">
				<li>
					<a href="/" className="hover:bg-cyan-sky-12 py-2 px-4 rounded-full">
						Home
					</a>
				</li>
				<li>
					<a
						href="#about"
						className="hover:bg-cyan-sky-12 py-2 px-4 rounded-full"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#skill"
						className="hover:bg-cyan-sky-12 py-2 px-4 rounded-full"
					>
						Skill
					</a>
				</li>
				<li>
					<a
						href="#project"
						className="hover:bg-cyan-sky-12 py-2 px-4 rounded-full"
					>
						Project
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="hover:bg-cyan-sky-12 py-2 px-4 rounded-full"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
