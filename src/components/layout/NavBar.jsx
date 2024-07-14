import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar() {
	const { pathname } = location;
	const { hash } = location;
	const param = useParams();

	const active = "bg-cyan-sky-12";
	const nonActive = "hover:bg-cyan-sky-12";

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [param]);

	return (
		<nav className="w-fit fixed top-4 right-4 z-20">
			<ul className="flex flex-col sm:flex-row gap-4 bg-white w-fit p-4 rounded-3xl sm:rounded-full shadow-md">
				<li className="w-full sm:w-fit">
					{pathname == "/" ? (
						<a
							href="#"
							className={`w-full sm:w-fit py-2 px-4 rounded-full ${
								hash == "" ? active : nonActive
							}`}
						>
							Home
						</a>
					) : (
						<Link
							to="/"
							className={`w-full sm:w-fit py-2 px-4 rounded-full ${
								pathname == "/" ? active : nonActive
							}`}
						>
							Home
						</Link>
					)}
				</li>
				{pathname == "/" ? (
					<>
						<li className="w-full sm:w-fit">
							<a
								href="#about"
								className={`w-full sm:w-fit py-2 px-4 rounded-full ${
									hash == "#about" ? active : nonActive
								}`}
							>
								About
							</a>
						</li>
						<li className="w-full sm:w-fit">
							<a
								href="#skill"
								className={`w-full sm:w-fit py-2 px-4 rounded-full ${
									hash == "#skill" ? active : nonActive
								}`}
							>
								Skill
							</a>
						</li>
					</>
				) : null}
				<li className="w-full sm:w-fit">
					<a
						href="#project"
						className={`w-full sm:w-fit py-2 px-4 rounded-full ${
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
