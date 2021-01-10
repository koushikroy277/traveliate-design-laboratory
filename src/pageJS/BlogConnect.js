import React from "react";
import "../pageCSS/BlogConnect.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function BlogConnect() {
    return (
        <>
        <section className="mainConnect">
            <section className="blogSocial">
                <div className="socialTitle">
                    <h1>Follow US</h1>
                </div>
                <ul>
                    <li>
                    <NavLink to="#" className="link">
                        <i className="facebook">
                        <FaFacebookF />
                        </i>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="#" className="link">
                        <i className="instagram">
                        <FaInstagram />
                        </i>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="#" className="link">
                        <i className="whatsapp">
                        <FaWhatsapp />
                        </i>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="#" className="link">
                        <i className="twitter">
                        <FaTwitter />
                        </i>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="#" className="link">
                        <i className="youtube">
                        <FaYoutube />
                        </i>
                    </NavLink>
                    </li>
                </ul>
            </section>
            <section className="blogMsg">
                <section className="msgSect">
                    <form action="#">
                        <label id="msgTitle" htmlFor="msg">Send us a message</label><br/>
                        <input type="text" id="msg" placeholder="Your Message"/><br/>
                        <input type="submit" id="sub-btn"/>
                    </form>
                </section>
            </section>
            <section className="blogConTips">
                <section className="blogTipList">
                    <h1>Sweet Travel</h1>
                    <div className="blog-number">
                        <span>1</span><div>Explicit tour in the Most Visited Country</div>
                    </div>
                    <div className="blog-number">
                        <span>2</span><div>Taste the most popular and delicious food of different countries</div>
                    </div>
                    <div className="blog-number">
                        <span>3</span><div>Wear the designer and native clothes of their respective countries</div>
                    </div>
                    <div className="blog-number">
                        <span>4</span><div>Know the culture and tradition of foreign countries</div>
                    </div>
                    <div className="blog-number">
                        <span>5</span><div>Buy the most luxuries things that will mesmerize you</div>
                    </div>
                </section>
            </section>
            <section className="blogPopular">
                <div className="popTitle">
                    <h1>
                        Our Top 10 Packages
                    </h1> 
                </div>
                <div className="blogPopItems">
                    <div className="popItem">
                        Top 10 popular places to go before you turn 30
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go during winter vacation
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go with your family
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go with your friends
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go if you are a food lover
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go if you are adventurous
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go if you are nature lover
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go if you are beach lover
                    </div>
                    <div className="popItem">
                        Top 10 popular places to go on your honeymoon
                    </div>
                </div>
            </section>
        </section>
        </>
    );
}
