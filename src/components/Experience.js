import React from "react";
import "../main.css";
import IDevelopStudio from "./experience/iDevelopStudio";
import SevenKoncepts from "./experience/SevenKoncepts";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-heading">
          <h1>Work Experience</h1>
          <h6>Past and Current Jobs</h6>
        </div>
        <div className="timeline" data-aos="fade-in" data-aos-delay="300">
          <ul>
            <IDevelopStudio />
            <SevenKoncepts />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
