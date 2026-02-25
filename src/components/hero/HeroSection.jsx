import React from 'react'
import "./hero.css";
import heroImg from "../../assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__left">
          <span className="hero__badge">ON Creative Studio</span>

          <h1>
            Build Modern <br />
            Web Experiences <br />
            With Confidence
          </h1>

          <p>
            We design and develop high-performance web applications 
            using modern technologies like React, Node.js and UI/UX best practices.
          </p>

          <div className="hero__buttons">
            <button className="btn btn--primary">Get Started</button>
            <button className="btn btn--secondary">View Projects</button>
          </div>

          <div className="hero__stats">
            <div>
              <h3>50+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>2+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Client Focus</span>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <img src={heroImg} alt="hero" />
        </div>

      </div>
    </section>
  );
}