// src/pages/Projects/Projects.jsx
import React from "react";
import "./Projects.css";
import Portfolio from "../../../public/Project.jpg";
import HSRPPOS from "../../../public/HSRP-POS.jpg";

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
];

function Projects() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-12 col-md-4" key={p.id}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front d-flex flex-column align-items-center p-3">
                  {/* Small image */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-img-small mb-2"
                  />
                  {/* Title */}
                  <h4 className="fw-bold text-center">{p.title}</h4>
                  {/* Description */}
                  <p className="text-muted text-center">{p.description}</p>
                </div>

                {/* Back */}
                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                  <p className="mb-3">{p.description}</p>
                  <div>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm mx-1"
                    >
                      Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark btn-sm mx-1"
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
