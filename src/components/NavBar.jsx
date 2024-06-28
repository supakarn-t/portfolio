import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar() {
	const path = location.pathname;
	const active = "bg-cyan-sky-12 py-2 px-4 rounded-full";
	const nonActive = "hover:bg-cyan-sky-12 py-2 px-4 rounded-full";

	useEffect(() => {}, [useParams()]);

	return (
		<nav className="w-fit fixed top-4 right-4">
			<ul className="flex gap-4 bg-white w-fit p-4 rounded-full">
				<li>
					<Link to={"/"} className={path == "/" ? active : nonActive}>
						Home
					</Link>
				</li>
				<li>
					<Link to={"/about"} className={path == "/about" ? active : nonActive}>
						About
					</Link>
				</li>
				<li>
					<Link
						to={"/project"}
						className={path == "/project" ? active : nonActive}
					>
						Project
					</Link>
				</li>
				<li>
					<Link
						to={"/contact"}
						className={path == "/contact" ? active : nonActive}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
