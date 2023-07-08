import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTruckFast,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import "./Home.css";

const Home = () => {
  return (
    <div className="main_div">
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
      <div className="button_div">
        <a className="service_button" href="/Services">
          Checkout our services?
        </a>
      </div>

      <div className="offer_cards">
        <div className="offer_cards_card1">
          <FontAwesomeIcon className="icons" icon={faTruckFast} size="10x" />
          <h1>Ship With Us</h1>
          <br />
          <p>Use our people, process and technology to deliver your packages</p>
          <a className="service_button_card" href="/Services">
            Ship now
          </a>
        </div>
        <div className="offer_cards_card2">
          <FontAwesomeIcon className="icons" icon={faLocationDot} size="10x" />
          <h1>Track Your Delivery</h1>
          <br />
          <p>
            Want to know where your package is or need to book a re-delivery?
          </p>
          <a className="service_button_card" href="./">
            Coming soon
          </a>
        </div>
        <div className="offer_cards_card3">
          <FontAwesomeIcon className="icons" icon={faBriefcase} size="10x" />
          <h1>Work With Us</h1>
          <br />
          <p>
            We're a fast-growing company and offer a wealth of job
            opportunities!
          </p>
          <a className="service_button_card" href="/Services">
            Join us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
