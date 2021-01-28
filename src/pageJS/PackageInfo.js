import React, { useState } from "react";
import "../pageCSS/PackageInfo.css";
import PkgContact from "./PkgContact";
import SliderElem from "./SliderElem";
import { Accordion, Card } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import dropImg from "../assets/food1.jpg";
import dropImg2 from "../assets/dessert.jpg";
import dropImg3 from "../assets/lake.jpg";
import dropImg4 from "../assets/river.jpg";
import dropImg5 from "../assets/mountain.jpg";
import dropImg6 from "../assets/hotel.jpg";
import dropImg7 from "../assets/pkg3.jpg";

export default function PackageInfo() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);

  const dropOpen = () => {
    setOpen(!open);
  };
  const dropOpen2 = () => {
    setOpen2(!open2);
  };
  const dropOpen3 = () => {
    setOpen3(!open3);
  };
  const dropOpen4 = () => {
    setOpen4(!open4);
  };
  const dropOpen5 = () => {
    setOpen5(!open5);
  };
  const dropOpen6 = () => {
    setOpen6(!open6);
  };
  const dropOpen7 = () => {
    setOpen7(!open7);
  };
  const dropOpen8 = () => {
    setOpen8(!open8);
  };
  const dropOpen9 = () => {
    setOpen9(!open9);
  };
  const dropOpen10 = () => {
    setOpen10(!open10);
  };
  const dropOpen11 = () => {
    setOpen11(!open11);
  };

  return (
    <>
      <section className="pkg-info">
        <section className="pkg-first">
          <div className="pkg-banner">
            <div data-aos="fade-right">
              <h1>Architecture & Traditions of Canada</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores delectus similique, corporis neque libero, sequi
                accusamus magni beatae illo, doloribus quia earum quibusdam
                reprehenderit impedit dolore rerum eaque eveniet error!
              </p>
            </div>
          </div>
        </section>

        <section className="mainPkg">
          <section className="pkg-second">
            <section className="pkg-data">
              <h1 className="secondary-head">Journey Timeline</h1>
              <div className="pkg-drop">
                <Accordion className="pkg-accordion">
                  <Card onClick={dropOpen} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item first-pkg">
                        <p>Day 1</p>
                        <div>
                          <i className={open ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen2} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item">
                        <p>Day 2</p>
                        <div>
                          <i className={open2 ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open2 ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg2} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen3} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="2"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item">
                        <p>Day 3</p>
                        <div>
                          <i className={open3 ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open3 ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg3} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen4} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="3"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item">
                        <p>Day 4</p>
                        <div>
                          <i className={open4 ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open4 ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg4} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen5} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="4"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item">
                        <p>Day 5</p>
                        <div>
                          <i className={open5 ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open5 ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg5} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen6} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="5"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item">
                        <p>Day 6</p>
                        <div>
                          <i className={open6 ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open6 ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg6} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen7} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="6"
                      className="pkg-colHead"
                    >
                      <div className="pkg-item last-pkg">
                        <p>Day 7</p>
                        <div>
                          <i className={open7 ? "show-dot" : "noshow-dot"}>
                            <GoPrimitiveDot />
                          </i>
                        </div>
                        <a>
                          Visiting Eractasia
                          <i className={open7 ? "openIcon" : "closedIcon"}>
                            <FaAngleDown />
                          </i>
                        </a>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div
                          data-aos="fade-in"
                          className="drop-item last-drop-item"
                        >
                          <p>
                            Grab your breakfast by the side of the beautiful
                            beach
                          </p>
                          <img src={dropImg7} alt="image" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </section>

            {/* Package Inclusion */}

            <section className="pkg-second pkg-include">
              <section className="pkg-data">
                <h1 className="secondary-head">Package Inclusion</h1>
                <Accordion>
                  <Card onClick={dropOpen8} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="7"
                      className="pkg-colHead"
                    >
                      <div className="pkg-drop later-dropdown">
                        <div className="pkg-item item-later first-item-later">
                          <span></span>
                          <div>
                            <i className={open8 ? "show-dot" : "noshow-dot"}>
                              <GoPrimitiveDot />
                            </i>
                          </div>
                          <a>
                            Transportation
                            <i className={open8 ? "openIcon" : "closedIcon"}>
                              <FaAngleDown />
                            </i>
                          </a>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            <p>
                              From Chicago to Los Angeles, economy class flight
                              by Air US
                            </p>
                            <p>
                              Los Angeles to New York, business class flight by
                              NewYork Airlines
                            </p>
                            <p>
                              And, finally, return flight to Chicago from New
                              York by Air Infestia
                            </p>
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen9} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="8"
                      className="pkg-colHead"
                    >
                      <div className="pkg-drop later-dropdown">
                        <div className="pkg-item item-later">
                          <span></span>
                          <div>
                            <i className={open9 ? "show-dot" : "noshow-dot"}>
                              <GoPrimitiveDot />
                            </i>
                          </div>
                          <a>
                            Accomodation
                            <i className={open9 ? "openIcon" : "closedIcon"}>
                              <FaAngleDown />
                            </i>
                          </a>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            <p>2 nights at Georgia Hotel</p>
                            <p>3 nights at Eglamsia Resort</p>
                            <p>
                              2 nights at NewPublic Preliminary Resort &
                              Restaurent
                            </p>
                            <p>Including daily breakfast, lunch & dinner</p>
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen10} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="9"
                      className="pkg-colHead"
                    >
                      <div className="pkg-drop later-dropdown">
                        <div className="pkg-item item-later">
                          <span></span>
                          <div>
                            <i className={open10 ? "show-dot" : "noshow-dot"}>
                              <GoPrimitiveDot />
                            </i>
                          </div>
                          <a>
                            Trips & Tour
                            <i className={open10 ? "openIcon" : "closedIcon"}>
                              <FaAngleDown />
                            </i>
                          </a>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item">
                          <p>
                            <p>Visiting Shining Temple of Chicago</p>
                            <p>Visiting Science Museum of New York</p>
                            <p>
                              A visit at Great Art Gallery of Leonardo Da Vinci
                              in Los Angeles
                            </p>
                            <p>
                              Roaming around the Google Campus & Headquarter in
                              NewYork
                            </p>
                            <p>
                              A hiking trip at the Last Berg Hill in Chicago
                            </p>
                            <p>Hawaii Beach Tour</p>
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card onClick={dropOpen11} className="pkg-colCard">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="10"
                      className="pkg-colHead"
                    >
                      <div className="pkg-drop later-dropdown">
                        <div className="pkg-item item-later last-item-later">
                          <span></span>
                          <div>
                            <i className={open11 ? "show-dot" : "noshow-dot"}>
                              <GoPrimitiveDot />
                            </i>
                          </div>
                          <a>
                            Others
                            <i className={open11 ? "openIcon" : "closedIcon"}>
                              <FaAngleDown />
                            </i>
                          </a>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10" className="pkg-col">
                      <Card.Body className="pkg-colBody">
                        <div data-aos="fade-in" className="drop-item last-drop-item">
                          <p>
                            <p>Emergency Medical Facility</p>
                            <p>Hygiency Accomodation</p>
                            <p>Safe Travel</p>
                            <p>Refund policy</p>
                            <p>
                              Can cancel the trip anytime before 2 days of the
                              trip
                            </p>
                            <p>Co-operating stuffs, crew & workers</p>
                            <p>
                              For any queries, customer can contact our agency
                              via social media, mobile phone, email etc
                            </p>
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </section>
            </section>
          </section>
          <section className="pkg-contact">
            <PkgContact />
          </section>
        </section>

        {/* Package Slider */}
        <section className="page-header">
          <h1>Check out some other popular packages</h1>
        </section>
        <section className="pkg-slider">
          <SliderElem />
        </section>
      </section>
    </>
  );
}
