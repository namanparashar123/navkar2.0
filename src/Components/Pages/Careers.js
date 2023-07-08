import React from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Careers.css";

export default function Careers() {
  return (
    <div>
      <p className="career_para">
        We firmly believe that integrity and team work helps a venture to reach
        maximum heights. Getting acquainted with the new innovations and
        technology is extremely essential in the recent times. Therefore
        systematic instructions and training is provided to our prospective
        members. Working with us could be a flourishing gateway to new
        opportunities and personal development.<br/>
        <br/>
        <strong>Email your resume at info@navkarcourier.ca</strong>
        <br/>
        (make sure to include the job title!)
      </p>
      <Accordion className="card">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Drivers</Accordion.Header>
          <Accordion.Body>
            <li>Flex Driver</li>
            <li>5-ton Truck Driver</li>
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Admin</Accordion.Header>
          <Accordion.Body>
            <li>Bookkeeper</li>
          </Accordion.Body>
        </Accordion.Item>
        <br></br>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Operations</Accordion.Header>
          <Accordion.Body>
            <li>Dispatcher</li> 
            <li>Supervisor</li>           
            <li>Manager</li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
