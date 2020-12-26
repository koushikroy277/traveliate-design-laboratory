import React from 'react';
import {Link} from 'react-router-dom';
import '../pageCSS/VisaPkg.css';
import VisaRender from './VisaRender';
import {FaSearch} from 'react-icons/fa';

export default function VisaPkg() {
    return (
        <>
            <section className="main-visa">
                <section className="page-header">
                    <h1>Visa Services</h1>
                </section>
                <section className="visa-search-box">
                    <input type="text" placeholder="Search..." name="search-box" id="search" width="100%"/>
                    <i><FaSearch /></i>
                </section>
                <section className="visa-pkg" data-aos="fade-up">
                        {VisaRender.map((data)=>{
                            const {imgsrc, head, para, url} = data;
                            return(
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
                            )
                        })}
                </section>
            </section>
        </>
    )
}
