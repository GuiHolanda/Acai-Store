import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootLayoutPage } from "./pages/RootLayout.tsx";
import { HomePage } from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
