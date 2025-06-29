import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000046] via-[#096781] to-[#000046]




"
    >
      <nav className="sticky top-0 z-50 glass">
        <Navbar></Navbar>
      </nav>
      <main className="container mx-auto ">
        <Outlet></Outlet>
      </main>
      <footer className="glass ">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayOut;
