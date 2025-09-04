// src/pages/Social.jsx
import React from "react";
import "./Social.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    id: 1,
    title: "GitHub",
    description: "Explore my repositories & projects.",
    icon: <FaGithub size={30} />,
    link: "https://github.com/your-github",
  },
  {
    id: 2,
    title: "LinkedIn",
    description: "Let’s connect professionally.",
    icon: <FaLinkedin size={30} />,
    link: "https://linkedin.com/in/your-linkedin",
  },
  {
    id: 3,
    title: "Twitter",
    description: "Follow me for updates.",
    icon: <FaTwitter size={30} />,
    link: "https://twitter.com/your-twitter",
  },
  {
    id: 4,
    title: "Email",
    description: "Reach me directly via email.",
    icon: <FaEnvelope size={30} />,
    link: "mailto:yourmail@example.com",
  },
];

function Social({ isDark }) {
  return (
    <div
      className={`container my-5 p-4 rounded shadow ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h2 className="fw-bold mb-4 text-start">Social Network</h2>

      {/* Horizontal row */}
      <div className="d-flex justify-content-start gap-5 flex-wrap">
        {socials.map((c) => (
          <div key={c.id}>
            <div
              className={`flip-card small-card ${
                isDark ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div
                  className={`flip-card-front d-flex flex-column justify-content-center align-items-center p-2 ${
                    isDark ? "bg-secondary text-light" : "bg-white text-dark"
                  }`}
                >
                  <div className="mb-2">{c.icon}</div>
                  <h6 className="fw-bold text-center">{c.title}</h6>
                </div>

                {/* Back */}
                <div
                  className={`flip-card-back d-flex flex-column justify-content-center align-items-center ${
                    isDark ? "bg-dark text-light" : "bg-primary text-dark"
                  }`}
                >
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn btn-sm ${
                      isDark ? "btn-light text-dark" : "btn-dark text-light"
                    }`}
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;
