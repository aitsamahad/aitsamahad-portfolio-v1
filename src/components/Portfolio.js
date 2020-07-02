import React from "react";
import "../main.css";
import Tag from "./resuables/Tag";
import project1 from "../images/portitem1.jpeg";
import project2 from "../images/portitem2.jpeg";
import project3 from "../images/portitem3.jpeg";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <h1>Portfolio</h1>
          <h6>Some of my recent work</h6>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="portfolio-img has-margin-right">
            <img src={project1} alt="" />
          </div>
          <div className="portfolio-description">
            <h6>Web Development</h6>
            <h1>Blog Website</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>
            <Tag name="NodeJS" />
            <a href="#" className="cta">
              View Details ->
            </a>
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right">
            <h6>Mobile Application</h6>
            <h1>Android Application</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>
            <a href="#" className="cta">
              View Details ->
            </a>
          </div>
          <div className="portfolio-img">
            <img src={project2} alt="" />
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="portfolio-img has-margin-right">
            <img src={project3} alt="" />
          </div>
          <div className="portfolio-description">
            <h6>iOS Application</h6>
            <h1>Mobile Application</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus neque in laboriosam qui sunt consequatur consequuntur esse!
              Dolor, corrupti?
            </p>
            <a href="#" className="cta">
              View Details ->
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
