import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar() {
	const { pathname } = location;
	const { hash } = location;

	const active = "bg-cyan-sky-12";
	const nonActive = "hover:bg-cyan-sky-12";

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useParams()]);

	return (
		<nav className="w-fit fixed top-4 right-4">
			<ul className="flex gap-4 bg-white w-fit p-4 rounded-full">
				<li>
					{pathname == "/" ? (
						<a
							href="#"
							className={`py-2 px-4 rounded-full ${
								hash == "" ? active : nonActive
							}`}
						>
							Home
						</a>
					) : (
						<Link
							to="/"
							className={`py-2 px-4 rounded-full ${
								pathname == "/" ? active : nonActive
							}`}
						>
							Home
						</Link>
					)}
				</li>
				{pathname == "/" ? (
					<>
						<li>
							<a
								href="#skill"
								className={`py-2 px-4 rounded-full ${
									hash == "#skill" ? active : nonActive
								}`}
							>
								Skill
							</a>
						</li>
						<li>
							<a
								href="#about"
								className={`py-2 px-4 rounded-full ${
									hash == "#about" ? active : nonActive
								}`}
							>
								About
							</a>
						</li>
					</>
				) : null}
				<li>
					<a
						href="#project"
						className={`py-2 px-4 rounded-full ${
							pathname == "/project" || hash == "#project" ? active : nonActive
						}`}
					>
						Project
					</a>
				</li>
			</ul>
		</nav>
	);
}
