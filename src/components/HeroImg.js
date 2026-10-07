import "./HeroImgStyles.css";
import React, { useEffect, useRef } from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  const heroRef = useRef();

  useEffect(() => {
    /* ================= MOUSE GLOW ================= */
    const moveGlow = (e) => {
      heroRef.current.style.setProperty("--x", e.clientX + "px");
      heroRef.current.style.setProperty("--y", e.clientY + "px");
    };

    window.addEventListener("mousemove", moveGlow);
 
    /* ================= MATRIX EFFECT ================= */
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff9f";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <canvas id="matrix"></canvas>

      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Intro" />
      </div>

      <div className="content">
        <p>HI, I'M EDSON BRIAN.</p>

        <h1 className="glitch" data-text="Cyber Security Analyst">
          Cyber Security Analyst lil    

        </h1>
        <div className="btn-group">
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
          <a href="/Edson Brian.pdf.docx" download className="btn btn-cv">
            Download CV
  
          </a>
        </div> 
      </div>
    </div>
  );
};

export default Heroimg;