import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import "./Home.css";
import Projects from "../Projects/Projects";
import Social from "../Social/Social";


function Home({ isDark }) {
  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center w-100 p-0 mt-5 text-center rounded ${isDark ? "bg-dark text-light" : "bg-white text-dark"}`}
    >
      <h1 className="display-3 fw-bold">Hi, I'm Birendra 🚀</h1>

      <ReactTyped
        strings={[
          "React💻",
          "SQL Server🗄️",
          "NodeJS📦",
          "API Testing🔗🌐",
          "ERPNext🏢📊📋",
        ]}
        typeSpeed={40}
        backSpeed={40}
        loop
        className={`lead mt-3 ${isDark ? "text-light" : "text-dark"}`}
      />

      <div className="mt-4 text-center">
        
        <Link to="/projects" className={`btn btn-lg mx-1 ${isDark ? "btn-light text-dark" : "btn-primary"}`}>
          Projects
        </Link>

        <Link to="/social" className={`btn btn-lg mx-1 ${isDark ? "btn-outline-light" : "btn-outline-dark"}`}>
          Social
        </Link>

      </div>
    </section>
  );
}

export default Home;
