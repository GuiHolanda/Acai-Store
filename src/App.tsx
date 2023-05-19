import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootLayoutPage } from "./pages/RootLayout.tsx";
import { HomePage } from "./pages/Home.tsx";
import { ProductsContextProvider } from "./context/Products-context.tsx";
import { Orders } from "./pages/Orders.tsx";
import { ToasterProvider } from "./context/Toaster-context.tsx";
import { LoginPage } from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "orders", element: <Orders /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export function App() {
  return (
    <ToasterProvider>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </ToasterProvider>
  );
}
