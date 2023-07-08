import React from "react";

import fiveTon from "../images/5ton.png";
import miniVan from "../images/minivan.png";
import sprinter from "../images/sprinter.png";

import "./About.css";

export default function About() {
  return (
    <div className="about_container">
      <div className="home_container">
        <div className="vision">Our Vision</div>
        <p className="vision-content">
        Navkar courier aims to bridge gaps in the courier industry, meeting Canadian demands with reliability, integrity, and innovation through teamwork and open communication.
        </p>
      </div>
      <div className="about">Our Story</div>
      <div className="about_content">
        <p>
          For businesses and people across Canada, Navkar Courier offers
          dependable and affordable delivery solutions. Since our company's
          founding in 2020, we have always aimed to satisfy each of our clients'
          individual needs with exceptional customer service and customized
          solutions.
        </p>
        <p>
          Navkar Courier, one of the rapid growing courier companies in Canada,
          evolved from a small scale startup to a fully grown network of
          extremely trained people working everyday to provide best courier
          support to various companies. We provide strong end to end services
          eliminating all the choke points and have emerged as the dynamic
          logistic business support for various e-commerce business.
        </p>
        <p>
          We take great pride in being known for providing excellent customer
          service and dependability.
        </p>
      </div>
      <div className="fleet_info">
        <div className="fleet_header">Our Fleet</div>
        <p>
          Our fleet is regularly monitored using the latest GPS technology
          ensuring safety of your packages.
        </p>
        <div className="fleet_options">
          <div className="fleet">
            <img src={miniVan} alt="mini-van" />
            <h1>Minivans</h1>
          </div>
          <div className="fleet">
            <img src={sprinter} alt="sprinter" />
            <h1>Sprinters</h1>
          </div>
          <div className="fleet">
            <img src={fiveTon} alt="5-ton" />
            <h1>Box Trucks</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
