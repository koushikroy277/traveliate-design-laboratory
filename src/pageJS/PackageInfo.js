import React from "react";
import "../pageCSS/PackageInfo.css";
import PkgContact from "./PkgContact";
import SliderElem from "./SliderElem";
import { PkgTimeline, PkgIncludeTime } from "./PkgTimeline";
import dropImg from "../assets/food1.jpg";
import dropImg2 from "../assets/dessert.jpg";
import dropImg3 from "../assets/lake.jpg";
import dropImg4 from "../assets/river.jpg";
import dropImg5 from "../assets/mountain.jpg";
import dropImg6 from "../assets/hotel.jpg";
import dropImg7 from "../assets/pkg3.jpg";

export default function PackageInfo() {
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
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 1"
                  timeHead="Visiting Eractasia"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg}
                />
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 2"
                  timeHead="Visiting Rashford Museum"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg2}
                />
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 3"
                  timeHead="Trip to the longest bridge, Ramping Bridge"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg3}
                />
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 4"
                  timeHead="Visiting Tortilla"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg4}
                />
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 5"
                  timeHead="Roaming by the side of SeaShore"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg5}
                />
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 6"
                  timeHead="Camping at the top of the mountain"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg6}
                />
                <PkgTimeline
                  timeUpline={30}
                  timeDownLine={20}
                  timeDay="Day 7"
                  timeHead="Camping at the top of the mountain"
                  timeDes="Grab your breakfast by the beautiful beach"
                  timeImg={dropImg7}
                />
                
              </div>
            </section>

            {/* Package Inclusion */}

            <section className="pkg-second pkg-include">
              <section className="pkg-data">
                <h1 className="secondary-head">Package Inclusion</h1>
                <div className="pkg-drop">
                  <PkgIncludeTime
                    incHead="Flights & Departure"
                    incDes={
                      <p>
                        <p>
                          From Chicago to Los Angeles, economy class flight by
                          Air US
                        </p>
                        <p>
                          Los Angeles to New York, business class flight by
                          NewYork Airlines
                        </p>
                        <p>
                          And, finally, return flight to Chicago from New York
                          by Air Infestia
                        </p>
                      </p>
                    }
                  />
                  <PkgIncludeTime
                    incHead="Accomodation"
                    incDes={
                      <p>
                        <p>2 nights at Georgia Hotel</p>
                        <p>3 nights at Eglamsia Resort</p>
                        <p>
                          2 nights at NewPublic Preliminary Resort & Restaurent
                        </p>
                        <p>Including daily breakfast, lunch & dinner</p>
                      </p>
                    }
                  />
                  <PkgIncludeTime
                    incHead="Trips & Tour"
                    incDes={
                      <p>
                        <p>Visiting Shining Temple of Chicago</p>
                        <p>Visiting Science Museum of New York</p>
                        <p>
                          A visit at Great Art Gallery of Leonardo Da Vinci in
                          Los Angeles
                        </p>
                        <p>
                          Roaming around the Google Campus & Headquarter in
                          NewYork
                        </p>
                        <p>A hiking trip at the Last Berg Hill in Chicago</p>
                        <p>Hawaii Beach Tour</p>
                      </p>
                    }
                  />
                  <PkgIncludeTime
                    incHead="Trips & Tour"
                    incDes={
                      <p>
                        <p>Emergency Medical Facility</p>
                        <p>Hygiency Accomodation</p>
                        <p>Safe Travel</p>
                        <p>Refund policy</p>
                        <p>
                          Can cancel the trip anytime before 2 days of the trip
                        </p>
                        <p>Co-operating stuffs, crew & workers</p>
                        <p>
                          For any queries, customer can contact our agency via
                          social media, mobile phone, email etc
                        </p>
                      </p>
                    }
                  />
                </div>
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
