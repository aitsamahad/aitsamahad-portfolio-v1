import React from "react";
import "../main.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <h1>Services</h1>
          <h6>What i can do for you</h6>
        </div>
        <div className="my-skills">
          <div className="skill" data-aos="fade-in" data-aos-delay="200">
            <div className="icon-container">
              <i className="fas fa-layer-group"></i>
            </div>
            <h1>Web Development</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quidem soluta provident sequi fugit aliquid voluptate
              animi suscipit earum similique.
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="300">
            <div className="icon-container">
              <i className="fas fa-code"></i>
            </div>
            <h1>Android Applications</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quidem soluta provident sequi fugit aliquid voluptate
              animi suscipit earum similique.
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="400">
            <div className="icon-container">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h1>iOS Applications</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quidem soluta provident sequi fugit aliquid voluptate
              animi suscipit earum similique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
