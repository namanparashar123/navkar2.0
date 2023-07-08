import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faHouseCircleCheck,
  faTruckMoving,
  faRoad,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

export default function Services() {
  return (
    <div className="services_container">
      <div>
        <p className="intro_para">
          Navkar Courier is a shipping company that supports e-commerce delivery
          and 3rd Party Logistics operations by providing cost-effective final
          mile delivery service throughout Canada.
        </p>
      </div>
      <div className="services">
        <div className="iconSide">
          <FontAwesomeIcon
            className="service_icons"
            icon={faHouseCircleCheck}
            size="7x"
          />
          <br />
          <p>Final Mile Deliveries</p>
        </div>
        <div className="contentSide">
          Experience daily convenience with our prompt delivery service and
          express shipping options. Whether it's e-commerce packages or
          medications, we ensure timely and reliable deliveries for your
          convenience.
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="contentSide">
          From B2B to B2C, our transportation services cover it all. With a
          250-kilometer range, we serve Brandon, MB to Kenora, ON. Trust us for
          efficient logistics and seamless deliveries for your business and
          customers.
        </div>
        <div className="iconSide">
          <FontAwesomeIcon
            className="service_icons"
            icon={faTruckMoving}
            size="7x"
          />
          <FontAwesomeIcon className="service_icons" icon={faRoad} size="3x" />
          <br />
          <p>Shuttle Runs</p>
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="iconSide">
          <FontAwesomeIcon
            className="service_icons "
            icon={faPhoneVolume}
            size="7x"
          />
          <br />
          <p>On-Call Services</p>
        </div>
        <div className="contentSide">
          Our logistics company provides convenient on-call services for
          drop-offs and pick-ups. Whether you need timely deliveries or
          efficient pickups, our dedicated team is ready to assist you with
          seamless logistics solutions.Í
        </div>
      </div>
    </div>
  );
}
