import React from "react";
import {ReactTyped} from "react-typed";
import "./Home.css";

function Home() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center w-100 p-0 mt-5 text-center text-dark rounded">
      {/* <div className="d-flex flex-column justify-content-center align-items-center w-100 p-0 mt-5 text-center text-dark rounded shadow"> */}
      <h1 className="display-3 fw-bold">Hi, I'm Birendra 🚀</h1>
      
      <ReactTyped
        strings={[
          "React Developer 💻",
          "Cybersecurity Enthusiast 🔐",
          "Building Cool Apps 🚀",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="lead mt-3"
      />

      <div className="mt-4">
        <a href="/projects" className="btn btn-primary btn-lg mx-2">View Projects</a>
        <a href="/social" className="btn btn-outline-light btn-lg mx-2">Contact Me</a>
      </div>
    {/* </div> */}
    </section>
  );
}

export default Home;
