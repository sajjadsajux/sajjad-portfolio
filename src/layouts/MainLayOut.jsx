import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div className="bg-base-200 ">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="container mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayOut;
