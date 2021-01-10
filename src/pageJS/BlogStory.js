import React from "react";
import "../pageCSS/BlogStory.css";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import blog from "../blogAsset/story7.jpg";
import blog2 from "../blogAsset/story2.jpg";
import blog3 from "../blogAsset/story5.jpg";
import blog4 from "../blogAsset/story.jpg";
import blog5 from "../blogAsset/story3.jpg";
import blog6 from "../blogAsset/story6.jpg";
import blogPerson from "../blogAsset/modelwebsite.jpg";

export default function BlogStory() {
    return (
        <>
        <section className="mainStory">
            <div className="storyTitle">
                <h1>Beach Trip</h1>
                <p>Make your day mesmerizing by the side of the beach</p>
            </div>
            <div className="storyCard">
            <div className="indiCard">
                <img src={blog} alt="blog" />
                <div className="storyCardHead">
                    <h1>Surf on the huge sea bed</h1>
                    <div className="storyCardCapt">
                        <div className="blogReview">
                            <img src={blogPerson} alt="person" />
                            <h3>
                            by <strong>William Perry</strong>
                            </h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            nostrum earum, inventore, qui doloribus exercitationem pariatur,
                            ab mollitia molestiae impedit quaerat maxime voluptate facere
                            fugiat fugit ad sint beatae placeat.
                        </p>
                    </div>
                </div>
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            <div className="indiCard">
                <img src={blog2} alt="blog" />
                <div className="storyCardHead">
                    <h1>Enjoy the exciting beach volleyball
                    </h1>
                    <div className="storyCardCapt">
                        <div className="blogReview">
                            <img src={blogPerson} alt="person" />
                            <h3>
                            by <strong>William Perry</strong>
                            </h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            nostrum earum, inventore, qui doloribus exercitationem pariatur,
                            ab mollitia molestiae impedit quaerat maxime voluptate facere
                            fugiat fugit ad sint beatae placeat.
                        </p>
                    </div>
                </div>
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            </div>
            <div className="storyTitle">
            <h1>Hiking & Climbing</h1>
            <p>Make your day adventurous up above the mountain</p>
            </div>
            <div className="storyCard">
            <div className="indiCard" data-aos="fade-up">
                <img src={blog3} alt="blog" />
                <div className="storyCardHead">
                    <h1>Ski through the snow of Tolisho Hill</h1>
                    <div className="storyCardCapt">
                        <div className="blogReview">
                            <img src={blogPerson} alt="person" />
                            <h3>
                            by <strong>William Perry</strong>
                            </h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            nostrum earum, inventore, qui doloribus exercitationem pariatur,
                            ab mollitia molestiae impedit quaerat maxime voluptate facere
                            fugiat fugit ad sint beatae placeat.
                        </p>
                    </div>
                </div>
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            <div className="indiCard" data-aos="fade-up">
                <img src={blog4} alt="blog" />
                <div className="storyCardHead">
                    <h1>Take a sneak peak up above the hill</h1>
                    <div className="storyCardCapt">
                        <div className="blogReview">
                            <img src={blogPerson} alt="person" />
                            <h3>
                            by <strong>William Perry</strong>
                            </h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            nostrum earum, inventore, qui doloribus exercitationem pariatur,
                            ab mollitia molestiae impedit quaerat maxime voluptate facere
                            fugiat fugit ad sint beatae placeat.
                        </p>
                    </div>
                </div>
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading{" "}
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            </div>
            <div className="storyTitle">
            <h1>Feel the magnetism of limitless sky</h1>
            <p>Make your day mesmerizing by the side of the beach</p>
            </div>
            <div className="storyCard">
            <div className="indiCard" data-aos="fade-up">
                <img src={blog5} alt="blog" />
                <div className="storyCardHead">
                    <h1>Experience the freak of bungee jumping</h1>
                    <div className="storyCardCapt">
                        <div className="blogReview">
                            <img src={blogPerson} alt="person" />
                            <h3>
                            by <strong>William Perry</strong>
                            </h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            nostrum earum, inventore, qui doloribus exercitationem pariatur,
                            ab mollitia molestiae impedit quaerat maxime voluptate facere
                            fugiat fugit ad sint beatae placeat.
                        </p>
                    </div>
                </div>
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            <div className="indiCard" data-aos="fade-up">
                <img src={blog6} alt="blog" />
                <div className="storyCardHead">
                    <h1>Feel the limitless sky through para gliding</h1>
                    <div className="storyCardCapt">
                        <div className="blogReview">
                            <img src={blogPerson} alt="person" />
                            <h3>
                            by <strong>William Perry</strong>
                            </h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            nostrum earum, inventore, qui doloribus exercitationem pariatur,
                            ab mollitia molestiae impedit quaerat maxime voluptate facere
                            fugiat fugit ad sint beatae placeat.
                        </p>
                    </div>
                </div>
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
