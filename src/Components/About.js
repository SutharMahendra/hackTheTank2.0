import React from "react";
import Aboutimg from "../Assets/about-img.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Aboutimg} alt="About_image" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Embrace your moto</span>
        </h3>
        <p className="about-description">Welcome to raja rani.</p>

        <h4 className="about-text-title">
          Advancing Your Sewing Skills With Purpose
        </h4>

        <SolutionStep
          title="Mastering the Basics"
          description="Build a strong foundation with essential sewing techniques. From threading a needle to basic stitches, ensure you have the fundamental skills to advance confidently"
        />

        <SolutionStep
          title="Explore Advanced Techniques"
          description="Delve into advanced sewing methods. Learn intricate stitches, pattern making, and garment construction to elevate your sewing to a professional level"
        />

        <SolutionStep
          title="Creative Design & Innovation"
          description="Unleash your creativity through design. Explore how to blend traditional sewing skills with contemporary designs, enabling you to create unique and fashionable pieces"
        />

        <SolutionStep
          title="Sewing for Sustainability"
          description="Embrace eco-friendly sewing practices. Learn about sustainable materials and methods that reduce environmental impact, aligning your sewing passion with the moto of sustainability"
        />
      </div>
    </div>
  );
}

export default About;
