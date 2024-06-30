import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<main className="flex flex-col gap-16 p-24 min-h-screen">
						<Outlet />
					</main>
				</>
			),
			errorElement: <></>,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/about",
					element: (
						<>
							<AboutPage />
							<Footer />
						</>
					),
				},
				{
					path: "/project",
					element: (
						<>
							<ProjectPage />
							<Footer />
						</>
					),
				},
				{
					path: "/contact",
					element: (
						<>
							<ContactPage />
							<Footer />
						</>
					),
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
