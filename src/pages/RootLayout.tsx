import { Outlet } from "react-router-dom";
import { Header } from "../components/UI/Header";

import { CartTab } from "../components/cart/CartTab";
import { Footer } from "../components/UI/Footer";

export const RootLayoutPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col px-5 container mx-auto my-20">
        <CartTab />
        <div className="flex-grow mb-8">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};
