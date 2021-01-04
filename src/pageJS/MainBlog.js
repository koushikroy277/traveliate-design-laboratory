import React, {useState} from 'react';
import '../pageCSS/MainBlog.css';
import {BsCameraVideoFill} from 'react-icons/bs';
import BlogSlide from './BlogSlide';
import BlogStory from './BlogStory';
import BlogConnect from './BlogConnect';
import blogBg from '../assets/travel3.jpg';
import blogBg2 from '../assets/travel4.jpg';
import blogBg3 from '../assets/travel5.jpg';
import oceanVid from '../blogAsset/oceanVid.mp4';

export default function MainBlog() {
    const [fixed, setFixed] = useState(false);

    const scrollFix=()=>{
        if (window.scrollY > 2200 && window.innerWidth > 1200){
            setFixed(true)
        }else{
            setFixed(false)
        }
    }

    window.addEventListener("scroll", scrollFix);

    return (
        <>
        <section className="mainBlog">
            <section className="bannerBlog">
            <div id="carouselExampleCaptions" className="carousel slide blog-carousel" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={blogBg} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={blogBg2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={blogBg3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
                </div>
            </section>
            <section className="blogSlide">
                <BlogSlide />
            </section>
            <section className="video-banner">
                <video id="oceanVid" autoPlay muted loop>
                    <source src={oceanVid} type="video/mp4" />
                </video>
                <section className="videoTitle">
                    <div className="videoCapt">
                        <h1>Discover the epic beauty of <strong>nature</strong></h1>
                        <p>Passionate about travel and sharing the world's wonders on the leisure travel side. We provide corporate travelers hi-touch services to facilitate their business travel needs. Named each year as one of the "Best Places To Work" in New York.</p>
                    </div>
                    <div className="video-btn">
                        <button><i><BsCameraVideoFill /></i> View our showreel</button>
                    </div>
                </section>
            </section>
            <section className="blogNews">
                <section className="blogStory" data-aos="fade-right">
                    <BlogStory />
                </section>
                <section className={fixed ? 'blogConnect fixed':'blogConnect'} data-aos="fade-left">
                    <BlogConnect />
                </section>
            </section>
        </section>
        </>
    )
}


