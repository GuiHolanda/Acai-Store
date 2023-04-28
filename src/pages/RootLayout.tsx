import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const RootLayoutPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col px-4 container mx-auto h-full">
        <div className="flex-grow mb-8">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};
