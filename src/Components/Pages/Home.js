import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //faLocationDot,
  //faBriefcase,
  faTruckFast,
  faCheck,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import fiveTon from "../images/5ton.png";
import miniVan from "../images/minivan.png";
import sprinter from "../images/sprinter.png";

import "./Home.css";
import "./About.css";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.offer_cards');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main_div">
      <section id="home">
      <h2 className="target">
        We are a fast-growing company that delivers over 450,000 packages a
        year.
      </h2>
      <h3>
        Navkar Courier is a leading courier company that provides delivery
        solutions in Manitoba and Ontario. Our technology-powered services
        seamlessly connect your e-commerce applications to our delivery network
        which is continuing to expand.
        <br />
        <br />
        We can offer you excellent delivery options for some of the lowest
        prices available within Canada. 
      </h3>
      <br />
      <h3>
        Navkar Courier is a leading courier company that provides delivery
        solutions in Manitoba and Ontario. Our technology-powered services
        seamlessly connect your e-commerce applications to our delivery network
        which is continuing to expand.
        <br />
        <br /> 
      </h3>
      <br />
      <h3>
        Navkar Courier is a leading courier company that provides delivery
        solutions in Manitoba and Ontario. Our technology-powered services
        seamlessly connect your e-commerce applications to our delivery network
        which is continuing to expand.
        <br />
        <br />
      </h3>
      <br />
      </section>

      <div className="about_container">
        <section id="about">
        <div className="vision">Our Vision</div>
        <p className="vision-content">
        Navkar courier aims to bridge gaps in the courier industry, meeting Canadian demands with reliability, integrity, and innovation through teamwork and open communication.
        </p>
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
      </section>
    </div>

    <section id="services">
      <div className="offer_cards">
        <div className="offer_cards_card1">
          <FontAwesomeIcon className="icons" icon={faWarehouse} size="10x" />
          <h1>Warehousing</h1>
          <br />
          <p>Use our people, process and technology to deliver your packages</p>
          <a className="service_button_card" href="/Warehousing">
            See more
          </a>
        </div>
        <div className="offer_cards_card2">
          <FontAwesomeIcon className="icons" icon={faCheck} size="10x" />
          <h1>Fullfillment</h1>
          <br />
          <p>
            Want to know where your package is or need to book a re-delivery?
          </p>
          <a className="service_button_card" href="/Fulfillment">
            Coming soon
          </a>
        </div>
        <div className="offer_cards_card3">
          <FontAwesomeIcon className="icons" icon={faTruckFast} size="10x" />
          <h1>Shipping</h1>
          <br />
          <p>
          Use our people, process and technology to deliver your packages
          </p>
          <a className="service_button_card" href="/Shipping">
            Ship with us
          </a>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;
