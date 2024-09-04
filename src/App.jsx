import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/home/HomePage";
import ProjectPage from "./pages/project/ProjectPage";
// import Footer from "./components/Footer";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<Outlet />
					{/* <Footer /> */}
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
