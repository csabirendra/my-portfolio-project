import React, { useState } from "react";
import img from "./../../assets/img/profile-about-me.png";
import "./About.css";

// function About() {
//   const [isDark, setIsDark] = useState(false);
  function About({ isDark }) {

  return (
    <div className={`container my-5 p-3 rounded shadow ${isDark ? "bg-gradient text-light" : "bg-light text-dark"}`}>
      <h2 className="fw-bold">About Me</h2>

      <div className="row align-items-center">
        {/* Image */}
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img
            src={img}
            alt="Profile"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Text */}
        <div className="col-12 col-md-8">
          <p className="lead fs-6 fs-md-5 text-justify" style={{ textAlign: "justify" }}>
            Hi! I'm <b>Birendra Kathayt</b>, a <b>Senior IT Executive</b> with hands-on experience in IT operations and database management.
            Currently, my organization is migrating from <b>.NET</b> to <b>React.js</b>, and I am actively working on the <b>front-end development</b> for this transition.
            Alongside this, I am involved in <b>ERPNext</b> for business migration, helping streamline enterprise processes and data management.
            I am passionate about <b>modern web development</b> and continuously learning <b>React.js</b> and <b>Node.js</b> to build responsive, scalable, and user-friendly applications.
            You can check out my personal projects and experiments on my <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a> 🚀.
          </p>
        </div>

      </div>

    </div>

  );
}

export default About;
