import React from "react";
import profileImg from "../images/aitsam.jpg";
import "../main.css";
import Social from "./Social.js";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile-img" data-aos="fade-right" data-aos-delay="200">
          <img src={profileImg} alt="Aitsam Ahad" />
        </div>
        <div
          className="about-details"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="about-heading">
            <h1>About</h1>
            <h6>Myself</h6>
          </div>
          <p>
            Hello! I'm Aitsam, a software engineer based in Islamabad, Web
            Developer with 4 years of experience in designing and developing
            user interfaces, testing, debugging, and eCommerce technologies.
            Proven ability in optimizing web functionality that improve data
            retrieval and workflow efficiencies using modern backends. <br />
            <br /> Currently i am in last semester of my bachelors from Virtual
            University of Pakistan, I am also working as a full stack engineer
            at iDevelopStudio where I work on a wide variety of interesting and
            meaningful projects on a daily basis.
          </p>
          <br />
          <p>
            Here are a few technologies I've been working with recently:
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & (S)CSS3</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>WebSockets</li>
            <li>SQL/NOSQL</li>
            <li>Mongo/MySQL</li>
            <li>Sequelize/Mongoose</li>
            <li>PHP</li>
            <li>SLIM for PHP</li>
            <li>RESTful API(s)</li>
          </p>
          <Social />
        </div>
      </div>
      <div className="get-in-touch">
        <a href="mailto:aitsama.ahad@gmail.com">Get In Touch</a>
      </div>
    </section>
  );
};

export default About;
