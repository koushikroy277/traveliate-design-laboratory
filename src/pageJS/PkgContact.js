import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import '../pageCSS/PkgContact.css';

export default function PkgContact() {
    return (
        <>
        <section className="mainCon">
            <section className="pkg-contact">
                <div className="pkgCon-head">
                    <h1>Contact Us Now</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos commodi quo minus necessitatibus modi eos nam ea nobis maxime, architecto deleniti delectus, asperiores consequatur perferendis mollitia quis expedita dicta.
                    </p>
                </div>
                <section className="main-pkgCon">
                    <form action="">
                        <label htmlFor="name">Name
                        </label>
                        <input type="text" 
                        id="name"/>
                        <label htmlFor="email">Email
                        </label>
                        <input type="email" id="email"/>
                        <label htmlFor="tel">Mobile Number</label>
                        <input type="tel" id="tel"/>
                        <label htmlFor="person">Number of people</label>
                        <input type="text" id="person"/>
                        <label htmlFor="date">Date of travelling</label>
                        <input type="date" id="date"/>
                    </form>
                    <Link to="#" className="button">
                        Make a Call <i><FaPhone/></i>
                    </Link>
                </section>
            </section>
        </section>
        </>
    )
}
