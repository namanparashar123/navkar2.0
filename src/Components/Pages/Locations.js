import React, { useEffect } from "react";
import manitobaMap from "../images/ManitobaFFF.jpg";
import ontarioMap from "../images/OntarioFFF.jpg"
import "./Locations.css";

const Locations = () => {

  useEffect(() => {
    const navbar = document.querySelector('.nav-bar');
    if (navbar) {
      navbar.style.display = 'none';
    }

    return () => {
      if (navbar) {
        navbar.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className="main">
      <section id="locations"></section>
      <h1 className="locations_heading">Areas We Service</h1>
      <div className="locations">
        
        <div className="locationCards_card1">
          <h1>Manitoba</h1>
          <br />
          <button className="areaButton_card" href="">
          Area list coming soon!
          </button>
        </div>
        <div className="locationCards_card2">
          <h1>Ontario</h1>
          <br />
          <button className="areaButton_card">
            Area list coming soon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
