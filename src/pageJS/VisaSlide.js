import React from 'react';
import '../pageCSS/VisaSlide.css';
import {Link} from 'react-router-dom';
import VisaRender from './VisaRender';

export default function VisaSlide() {
    return (
        <>
            <div class="swiper-container visaSlide">
                <div class="swiper-wrapper sec-visa">
                    {VisaRender.map((data)=>{
                        const {imgsrc, head, para, url}= data;
                        return(
                            <>
                            <div className="swiper-slide">
                            <section 
                                className="visa-card" >
                                <Link className="link" to={url}>    
                                    <div data-aos="fade-in"
                                    className="visa-img">
                                        <img src={imgsrc} alt="visa"/>
                                    </div>
                                <div 
                                className="visa-capt">
                                    <h1>{head}</h1>
                                    <p>{para}</p>
                                </div>
                                </Link>
                            </section>
                            </div>
                            </>
                        )
                    })}
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </>
    )
}
