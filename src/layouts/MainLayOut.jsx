import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div className="min-h-screen w-full   montserrat-font">
      {/* Dark Dotted Grid Background */}

      {/* Content Layer Above Background */}
      <div className="">
        <nav className="sticky top-0 z-50  bg-[linear-gradient(to_right,_#000428,_#004e92)]">
          <Navbar />
        </nav>
        <main className="">
          <Outlet />
        </main>
        <footer className="  bg-[linear-gradient(to_right,_#000428,_#004e92)]">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayOut;
