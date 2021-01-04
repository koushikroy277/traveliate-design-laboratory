import React from "react";
import "../pageCSS/BlogStory.css";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import blog from "../blogAsset/story7.jpg";
import blog2 from "../blogAsset/story2.webp";
import blog3 from "../blogAsset/story.webp";
import blog4 from "../blogAsset/story4.jpg";
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
                <h1>Surfing on the sea bed</h1>
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
                <h1>Enjoy the exciting beach volleyball</h1>
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
            <div className="indiCard">
                <img src={blog3} alt="blog" />
                <div className="storyCardHead">
                <h1>Skiing above the hill</h1>
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
                <img src={blog4} alt="blog" />
                <div className="storyCardHead">
                <h1>Feel the limitless sky through para gliding</h1>
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
            <div className="indiCard">
                <img src={blog5} alt="blog" />
                <div className="storyCardHead">
                <h1>Skiing above the hill</h1>
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
                <div className="readLink">
                <NavLink to="#" className="link">
                    Continue Reading{" "}
                    <i>
                    <FaAngleRight />
                    </i>
                </NavLink>
                </div>
            </div>
            <div className="indiCard">
                <img src={blog6} alt="blog" />
                <div className="storyCardHead">
                <h1>Enjoy the exciting beach volleyball</h1>
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
        </section>
        </>
    );
}
