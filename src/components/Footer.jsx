// Footer.js
import React from "react";
import "../assets/css/Footer.css";

function Footer({ theme }) {
  return (
    <footer
      className={`footer text-center py-3 ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-white"
      }`}
    >
      <p className="mb-0">
        © 2025 | All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
