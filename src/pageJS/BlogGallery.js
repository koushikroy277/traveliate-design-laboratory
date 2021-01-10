import React from "react";
import "../pageCSS/BlogGallery.css";
import '../pageCSS/izmir.min.css';
import BlogGalRender from './BlogGalRender';

export default function BlogGallery() {
    return (
        <>
        <div className="blogGallery">
            <div className="blogGal">
                {BlogGalRender.map((data)=>{
                const {galSrc, galHead, galId} = data;
                return (
                    <div className="blogGalItem" id={galId} data-aos="fade-up">
                            <figure
                            className="blogFigure c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right"
                            tabindex="0"
                            >
                            <img src={galSrc} className="galImg"/>
                            <figcaption className="c4-layout-bottom-left">
                                <div className="c4-reveal-right c4-delay-100">
                                <h3>{galHead}</h3>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}
