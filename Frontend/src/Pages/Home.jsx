import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import gautam from "../assets/images/gautam.png";
import heroBg from "../assets/images/hero-background.png";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="home-content">
          {/* LEFT TEXT */}
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm <span>Gautam Kumar</span></h1>
            <p className="hero-subtitle">
              Full Stack Developer | AI/ML Engineer | Content Creator
            </p>
            <p className="hero-description">
              Crafting intelligent web applications with MERN Stack & Machine Learning
            </p>
            <p className="hero-description content-creator">
              Creating educational content on Mathematics, Physics & AI/ML using Manim (Python) on Instagram
            </p>
            <div className="hero-tags">
              <span className="tag">MERN Stack</span>
              <span className="tag">AI/ML</span>
              <span className="tag">Python</span>
              <span className="tag">Manim</span>
              <span className="tag">Content Creator</span>
            </div>
            <div className="hero-buttons">
              <Link to="/projects" className="cta-button primary">View My Work</Link>
              <a
                href="https://www.instagram.com/characteristics_mantissa_100?igsh=b2h0ZzhxcmprYThu"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <span className="instagram-icon">📸</span> Instagram
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="profile-picture-container">
            <img src={gautam} alt="A portrait of the developer" />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Home;
