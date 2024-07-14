import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
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
