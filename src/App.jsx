import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<Outlet />
				</>
			),
			errorElement: <></>,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
