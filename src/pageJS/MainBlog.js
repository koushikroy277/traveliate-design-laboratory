import React, {useState} from 'react';
import '../pageCSS/MainBlog.css';
import {NavLink} from 'react-router-dom';
import {BsCameraVideoFill} from 'react-icons/bs';
import BlogSlide from './BlogSlide';
import BlogStory from './BlogStory';
import BlogConnect from './BlogConnect';
import BlogGallery from './BlogGallery';
import blogBg from '../assets/travel3.jpg';
import blogBg2 from '../assets/travel4.jpg';
import blogBg3 from '../assets/travel5.jpg';
import oceanVid from '../blogAsset/oceanVid.mp4';

export default function MainBlog() {
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
                    <div className="carousel-item active mainBlogItem">
                        <img src={blogBg} className="d-block w-100" alt="..."/>
                        <div className="carCaption">
                            <div className="carousel-caption carouselCapt animate__animated animate__zoomIn">
                                <h1>First slide label</h1>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div className="btn">
                                    <NavLink to="#" className="link noselect">
                                        View For More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item mainBlogItem">
                        <img src={blogBg2} className="d-block w-100" alt="..."/>
                        <div className="carCaption">
                            <div className="carousel-caption carouselCapt animate__animated animate__zoomIn">
                                <h1>First slide label</h1>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div className="btn">
                                    <NavLink to="#" className="link noselect">
                                        View For More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item mainBlogItem">
                        <img src={blogBg3} className="d-block w-100" alt="..."/>
                        <div className="carCaption">
                            <div className="carousel-caption carouselCapt animate__animated animate__zoomIn">
                                <h1>First slide label</h1>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div className="btn">
                                    <NavLink to="#" className="link noselect">
                                        View For More
                                    </NavLink>
                                </div>
                            </div>
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
            <div className="mainStoryHead">
                <h1>Trips & Tours</h1>
                <p>Check out our new adventurous tour to make your life cheerful</p>
            </div>

            <section className="blogSlide">
                <BlogSlide />
            </section>
            <section className="video-banner">
                <div className="blogVidWrap">
                    <video id="oceanVid" autoPlay muted loop>
                        <source src={oceanVid} type="video/mp4" />
                    </video>
                </div>
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
            <div className="mainStoryHead">
                <h1>Travel Stories</h1>
                <p>Read the aspiring stories of our different customers enjoying their journey to the fullest</p>
            </div>
            <section className="blogNews">
                <section className="blogStory" data-aos="fade-right">
                    <BlogStory />
                </section>
                <section className='blogConnect' data-aos="fade-left">
                    <BlogConnect />
                </section>
            </section>
            <div className="mainStoryHead">
                <h1>Travel Gallery</h1>
                <p>See our extensive photo gallery taken by our satisfied customers</p>
            </div>
            <section className="mainGallery">
                <BlogGallery />
            </section>
        </section>
        </>
    )
}


