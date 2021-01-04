import React from "react";
import "../pageCSS/BlogSlide.css";
import blogSlideRender from './blogSlideRender';

export default function BlogSlide() {
  return (
    <>
      <div className="swiper-container blogSwiper">
        <div className="swiper-wrapper">
          {blogSlideRender.map((data)=>{
            const {cardImg, title, des} = data;
            return(
              <div className="swiper-slide blogSwipeSlide">
                <div>
                  <img src={cardImg} alt="package"/>
                  <h1>{title}</h1>
                  <p>{des}</p>
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
