// src/pages/Skills/Skills.jsx
import React from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase, FaProjectDiagram
} from "react-icons/fa";

function Skills({ isDark }) {
  AOS.init({ duration: 800, once: true });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: "Intermediate", icon: <FaReact />, color: "#61DBFB" },
        { name: "JavaScript", level: "Intermediate", icon: <FaJsSquare />, color: "#eed830ff" },
        { name: "HTML & CSS", level: "Advanced", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "Bootstrap", level: "Advanced", icon: <FaCss3Alt />, color: "#563d7c" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Beginner", icon: <FaNodeJs />, color: "#095706ff" },
        { name: "Python", level: "Beginner", icon: <FaPython />, color: "#0854abff" },
        { name: "SQL Server", level: "Intermediate", icon: <FaDatabase />, color: "#db3532ff" },
      ],
    },
    {
      category: "ERP",
      skills: [
        { name: "ERPNext", level: "Beginner", icon: <FaProjectDiagram />, color: "#6A1B9A" },
      ],
    },
  ];

  return (
    <div className={`container my-5 p-4 rounded shadow ${isDark ? "bg-dark-mode text-light" : "bg-light-mode text-dark"}`}>
      <div className="mb-4">
        <h2 className="fw-bold text-start">Skills</h2>
      </div>

      {skillCategories.map((cat, idx) => (
        <div key={idx} className="mb-5">
          {/* 🔹 Category Heading */}
          <h5 className="fw-semibold mb-3 border-bottom pb-2">{cat.category}</h5>

          {/* 🔹 Category Skills */}
          <div className="row g-3">
            {cat.skills.map((skill, i) => (
              <div className="col-6 col-md-2" key={i} data-aos="fade-up">
                <div className={`p-3 rounded shadow skill-card d-flex flex-column align-items-center ${isDark ? "bg-dark-card text-light" : "bg-light-card text-dark"}`}>
                  <div className="mb-2" style={{ fontSize: "1.5rem", color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h6 className="mb-1">{skill.name}</h6>
                  <p className="mb-0">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
