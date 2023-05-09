import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootLayoutPage } from "./pages/RootLayout.tsx";
import { HomePage } from "./pages/Home.tsx";
import { ProductsContextProvider } from "./context/Products-context.tsx";
import { Orders } from "./pages/Orders.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "orders", element: <Orders /> },
    ],
  },
]);

export function App() {
  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />;
    </ProductsContextProvider>
  );
}
