import React from "react";
import "./main.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EmailSticky from "./components/EmailSticky";
import SocialSticky from "./components/SocialSticky";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <EmailSticky />
      <SocialSticky />
      <Footer />
    </div>
  );
}

export default App;
