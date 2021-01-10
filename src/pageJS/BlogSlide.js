import React from "react";
import "../pageCSS/BlogSlide.css";
import BlogSlideRender from './BlogSlideRender';

export default function BlogSlide() {
  return (
    <>
      <div className="swiper-container blogSwiper">
        <div className="swiper-wrapper">
          {BlogSlideRender.map((data)=>{
            const {cardImg, title, des, day, pay} = data;
            return(
              <div className="swiper-slide blogSwipeSlide">
                <div>
                  <img src={cardImg} alt="package"/>
                  <div className="swipeSlideCapt">
                    <div className="day">
                      <h1>{title}</h1>
                      <p>{des}</p>
                    </div>
                    <div className="pay">
                      <p>{day}</p>
                      <p>{pay}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="swiper-pagination page-nav"></div>
      </div>
    </>
  );
}
