import React from "react";
import { Link } from "react-router";

const SajjadLogo = () => {
  return (
    <Link to="/" className="inline-block">
      <img
        src="/logo.png" // Replace with your actual logo path
        alt="Logo"
        className="w-48  object-contain"
      />
    </Link>
  );
};

export default SajjadLogo;
