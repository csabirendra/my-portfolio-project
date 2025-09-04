// src/pages/Projects/Projects.jsx
import React from "react";
import "./Projects.css";
import Portfolio from "../../assets/img/my-portfolio.png";
import HSRPPOS from "../../assets/img/test-pos.png";
import ErpNextIcon from "../../assets/img/erpnext-icon.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Built with React, Bootstrap, and AOS.",
    img: Portfolio,
    demo: "http://localhost:5173/",
    github: "https://github.com/your-portfolio",
  },
  {
    id: 2,
    title: "E-Commerce Clone",
    description: "React + Node.js based e-commerce app.",
    img: HSRPPOS,
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "ERPNext Implementation",
    description: "ERP Implementation and Business Support",
    img: ErpNextIcon,
    demo: "",
    github: "",
  },
];

function Projects({ isDark }) {
  return (
    <div
      className={`container my-5 p-4 rounded shadow ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h2 className="fw-bold mb-4 text-start">My Projects</h2>
      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-12 col-md-4" key={p.id}>
            <div
              className={`flip-card ${
                isDark ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div
                  className={`flip-card-front d-flex flex-column align-items-center p-3 ${
                    isDark ? "bg-secondary text-light" : "bg-white text-dark"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-img rounded mb-2"
                  />
                  {/* <h5 className="fw-bold text-center">{p.title}</h5> */}
                  <p
                    className={`text-center ${
                      isDark ? "text-light" : "text-muted"
                    }`}
                  >
                    {p.description}
                  </p>
                </div>

                {/* Back */}
                <div
                  className={`flip-card-back d-flex flex-column justify-content-center align-items-center ${
                    isDark ? "bg-primary text-light" : "bg-primary text-dark"
                  }`}
                >
                  <p
                    className={`text-center ${
                      isDark ? "text-light" : "text-dark fw-bold"
                    }`}
                  >
                    {/* {p.description} */}
                  </p>
                  <div>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn btn-sm mx-1 ${
                        isDark ? "btn-light text-dark" : "btn-dark text-light"
                      }`}
                    >
                      Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn btn-sm mx-1 ${
                        isDark ? "btn-outline-light" : "btn-dark"
                      }`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
