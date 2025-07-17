import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] relative text-white">
      {/* Dark Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
           repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Layer Above Background */}
      <div className="relative z-10  text-white">
        <nav className="sticky top-0 z-50  ">
          <Navbar />
        </nav>
        <main className="container mx-auto">
          <Outlet />
        </main>
        <footer className="  ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayOut;
