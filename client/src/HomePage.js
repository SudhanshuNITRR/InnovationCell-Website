import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import LandingPage from "./Components/LandingPage/LandingPage";
// import PastEvents from "../Components/Events/PastEvents";
// import UpcomingEvents from "../Components/Events/UpcomingEvents";
import Navbar from "./Components/Navbar/Navbar";

import Sponsors from "./Components/Sponsors/Sponsors";
import AboutUs from "./Components/AboutUs/AboutUs";
import MakerSpace from "./Components/MakerSpace/MakerSpace";
import Team from "./Components/Team/Team";
import SnowfallComponent from "./Components/Snowfall/SnowfallComponent";
import NameCard from "./Components/Team/NameCard";
import Executives from "./Components/Team/Executives";
import Contact from "./Components/ContactUs/Contact";
import Moon from "./Assets/Moon";
import Accordian from "./Components/Faq/Accordian";
import Timeline from "./Components/Timeline/Timeline";

function App() {
  const contactUsRef = useRef(null); // Create a ref for the ContactUs component
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      // console.log("hi"+scrolled);
      setScrolled(true); // User has scrolled down
    } else {
      // console.log("hi"+scrolled);
      setScrolled(false); // User is at the top
    }
  };

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SnowfallComponent />
      <div className="App ">
        <div className={scrolled ? "dark-overlay" : ""}></div>
        <LandingPage />
        <div className="scroll-down" onClick={scrollToContactUs}>
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div>
        <div ref={contactUsRef} id="aboutusnav">
          <AboutUs />
        </div>
        {/* <div id="makerspacenav">
          <MakerSpace />
        </div> */}
        <div id="eventsnav">
          <Timeline />
        </div>
        <div id="teamnav">
          <Team />
        </div>
        <div id="contactusnav">
          <Contact />
        </div>
      </div>
      {/* <div ref={contactUsRef}>
         
        </div> */}
      {/* <MakerSpace /> */}
      <Accordian />
    </>
  );
}

export default App;