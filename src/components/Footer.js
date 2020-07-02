import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "../main.css";

const Footer = () => {
  return (
    <footer className="copyright">
      <div className="up" id="up" onClick={() => scroll.scrollToTop()}>
        <i className="fas fa-chevron-up"></i>
      </div>
      <p>
        &copy; 2020 - Aitsam Ahad | MERN Full Stack - Cross Platform Application
        Developer.
      </p>
    </footer>
  );
};

export default Footer;
