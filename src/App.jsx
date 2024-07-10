import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<main className="flex flex-col gap-16 pb-24 px-4 xl:px-24 min-h-screen">
						<Outlet />
					</main>
					<Footer />
				</>
			),
			errorElement: <></>,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/project",
					element: <ProjectPage />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
