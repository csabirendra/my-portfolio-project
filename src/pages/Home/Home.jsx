import React from "react";
import { ReactTyped } from "react-typed";
import "./Home.css";

function Home({ isDark }) {
  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center w-100 p-0 mt-5 text-center rounded ${isDark ? "bg-light text-light" : "bg-light text-dark"}` }
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
        <a
          href="http://localhost:5173/projects"
          className={`btn btn-lg mx-1 ${
            isDark ? "btn-light text-dark" : "btn-primary"
          }`}
        >
          View Projects
        </a>
        <a
          href="http://localhost:5173/social"
          className={`btn btn-lg mx-1 ${
            isDark ? "btn-outline-light" : "btn-outline-dark"
          }`}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
