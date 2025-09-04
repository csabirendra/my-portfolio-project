import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Social from "./pages/Social/Social";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState("light");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Initialize AOS and dark mode
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.body.className = isDark === "light" ? "light-mode" : "dark-mode";
  }, [isDark]);

  // Auto-hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleisDark = () => setIsDark(isDark === "light" ? "dark" : "light");

  return (
    <Router>
      {/* Navbar */}
      <Navbar expand="lg" fixed="top" className={`shadow-sm align-item-center ${isDark === "light" ? "bg-light" : "bg-dark text-white"}`} style={{ top: showNavbar ? 0 : "-80px", transition: "top 0.3s" }}>
        <Container fluid>
          {/* Mobile toggle + Brand */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" className={isDark === "dark" ? "navbar-dark" : "navbar-light"}/>

          <Navbar.Brand as={Link} to="/" className={isDark === "dark" ? "text-white" : ""}><strong> Portfolio</strong></Navbar.Brand>

          {/* Offcanvas for Mobile */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className={isDark === "light" ? "bg-light" : "bg-dark text-white"}
            style={{ width: "50%" }}
          >
            <Offcanvas.Header closeButton className={isDark === "dark" ? "text-white" : ""}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/about" className={isDark === "dark" ? "text-white" : ""}>About</Nav.Link>
                <Nav.Link as={Link} to="/skills" className={isDark === "dark" ? "text-white" : ""}>Skills</Nav.Link>
                <Nav.Link as={Link} to="/projects" className={isDark === "dark" ? "text-white" : ""}>Projects</Nav.Link>
                <Nav.Link as={Link} to="/social" className={isDark === "dark" ? "text-white" : ""}>Social</Nav.Link>
              </Nav>
              <Button variant="outline-none" className="ms-3 no-hover" onClick={toggleisDark}>
                {isDark === "light" ? "🌙" : "☀️"}
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>


      {/* Content wrapper */}
      <div className="content container" style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About isDark={isDark === "dark"} />} />
          <Route path="/skills" element={<Skills isDark={isDark === "dark"} />} />
          <Route path="/projects" element={<Projects isDark={isDark === "dark"}  />} />
          <Route path="/social" element={<Social isDark={isDark === "dark"}  />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer theme={isDark ? "dark" : "light"} />
    </Router>
  );
}

export default App;
