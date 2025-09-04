import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

function Header({ theme, toggleTheme }) {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
            className={`navbar navbar-expand-lg ${isDark === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
              } shadow-sm`}>
            <div className="container">
              <Link className="navbar-brand fw-bold" to="/">
                MyPortfolioss
              </Link>
    
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
              </div>
    
              <button className="btn btn-outline- ms-3 no-hover" onClick={toggleisDark}>
                {isDark === "light" ? "🌙" : "☀️"}
              </button>
    
    
            </div>
          </nav>
  );
}

export default Header;
