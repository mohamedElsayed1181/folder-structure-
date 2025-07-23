import Footer from "@/shared/Footer/Footer";
import Header from "@/shared/Header/Header";
import { Outlet } from "react-router-dom";

function MainLayOut() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayOut;
