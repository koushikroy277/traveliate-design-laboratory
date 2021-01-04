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
        </section>
        </>
    );
}
