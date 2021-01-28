import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pageCSS/SliderElem.css";
import SlideRender from "./SlideRender";
import "swiper/swiper-bundle.css";
import Swiper from 'swiper';

export default function SliderElem() {  
  return (
    <>
      <div class="swiper-container visaSlide">
        <div class="swiper-wrapper sec-visa">
          {SlideRender.map((data) => {
            const { imgsrc, head, para, url } = data;
            return (
              <>
                <div className="swiper-slide" data-aos="fade-up">
                  <section className="visa-card">
                    <Link className="link" to={url}>
                      <div data-aos="fade-in" className="visa-img">
                        <img src={imgsrc} alt="visa" />
                      </div>
                      <div className="visa-capt slide-capt">
                        <h1>{head}</h1>
                        <p>{para}</p>
                      </div>
                      <div className="slideBtn">
                        <button className="slide-button">Buy Now</button>
                      </div>
                    </Link>
                  </section>
                </div>
              </>
            );
          })}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </>
  );
}
