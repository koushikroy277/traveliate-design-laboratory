import React, { useState } from "react";
import "../pageCSS/PackageInfo.css";
import PkgContact from './PkgContact';
import SliderElem from './SliderElem';
import { FaAngleDown } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import dropImg from '../assets/food1.jpg';
import dropImg2 from '../assets/dessert.jpg';
import dropImg3 from '../assets/lake.jpg';
import dropImg4 from '../assets/river.jpg';
import dropImg5 from '../assets/mountain.jpg';
import dropImg6 from '../assets/hotel.jpg';

export default function PackageInfo() {
    const [ open, setOpen ] = useState(false);
    const [ open2, setOpen2 ] = useState(false);
    const [ open3, setOpen3 ] = useState(false);
    const [ open4, setOpen4 ] = useState(false);
    const [ open5, setOpen5 ] = useState(false);
    const [ open6, setOpen6 ] = useState(false);
    const [ open7, setOpen7 ] = useState(false);
    const [ open8, setOpen8 ] = useState(false);
    const [ open9, setOpen9 ] = useState(false);
    const [ open10, setOpen10 ] = useState(false);

    const dropOpen = () => {
        setOpen(!open)
    }
    const dropOpen2 = () => {
        setOpen2(!open2)
    }
    const dropOpen3 = () => {
        setOpen3(!open3)
    }
    const dropOpen4 = () => {
        setOpen4(!open4)
    }
    const dropOpen5 = () => {
        setOpen5(!open5)
    }
    const dropOpen6 = () => {
        setOpen6(!open6)
    }
    const dropOpen7 = () => {
        setOpen7(!open7)
    }
    const dropOpen8 = () => {
        setOpen8(!open8)
    }
    const dropOpen9 = () => {
        setOpen9(!open9)
    }
    const dropOpen10 = () => {
        setOpen10(!open10)
    }

    return (
        <>
        <section className="pkg-info">
            <section className="pkg-first">
            <div data-aos="fade-right" className="pkg-banner">
                <h1>Architecture & Traditions of Canada</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores delectus similique, corporis neque libero, sequi
                accusamus magni beatae illo, doloribus quia earum quibusdam
                reprehenderit impedit dolore rerum eaque eveniet error!
                </p>
            </div>
            </section>

            <section className="pkg-second">
            <section className="pkg-data">
                <section className="">
                    <SliderElem />
                </section>
                <h1 className="secondary-head">Journey Timeline</h1>
                <div className="pkg-drop">
                    <div className="pkg-item" onClick={dropOpen}>
                        <p>Day 1</p>
                        <div>
                            <i className={open ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            A visit at Georgia University Campus
                            <i className={open ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div> 
                    {open && <div   
                        className='drop-item'>
                            <p>Grab your breakfast in the morning by the side of beautiful beaches</p>
                            <img data-aos="fade-out"src={dropImg} alt="places"/>
                        </div>
                    }             
                    <div className="pkg-item" onClick={dropOpen2}>
                        <p>Day 2</p>
                        <div>
                            <i className={open2 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Visiting Great Island of Mariana 
                            <i className={open2 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open2 && 
                    <div className='drop-item'>
                        <p>Grab your breakfast in the morning by the side of beautiful beaches</p>
                        <img data-aos="fade-out" src={dropImg2} alt="places"/>
                    </div>
                    }
                    <div className="pkg-item" onClick={dropOpen3}>
                        <p>Day 3</p>
                        <div>
                            <i className={open3 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Trip at Brigade Lake
                            <i className={open3 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open3 && 
                    <div className='drop-item'>
                        <p>Grab your breakfast in the morning by the side of beautiful beaches</p>
                        <img data-aos="fade-out" src={dropImg3} alt="places"/>
                    </div>
                    }
                    <div className="pkg-item" onClick={dropOpen4}>
                        <p>Day 4</p>
                        <div>
                            <i className={open4 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Visit at Perpetory Forest
                            <i className={open4 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open4 && 
                    <div className='drop-item'>
                        <p>Grab your breakfast in the morning by the side of beautiful beaches</p>
                        <img data-aos="fade-out" src={dropImg4} alt="places"/>
                    </div>
                    }
                    <div className="pkg-item" onClick={dropOpen5}>
                        <p>Day 5</p>
                        <div>
                            <i className={open5 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Going to Arbium Mountain
                            <i className={open5 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open5 && 
                    <div className='drop-item'>
                        <p>Grab your breakfast in the morning by the side of beautiful beaches</p>
                        <img data-aos="fade-out" src={dropImg5} alt="places"/>
                    </div>
                    }
                    <div className="pkg-item" onClick={dropOpen6}>
                        <p>Day 6</p>
                        <div>
                            <i className={open6 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            A Visit at Hictor GrandScraper
                            <i className={open6 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open6 && 
                    <div className='drop-item'>
                        <p>Grab your breakfast in the morning by the side of beautiful beaches</p>
                        <img data-aos="fade-out" src={dropImg6} alt="places"/>
                    </div>
                    }
                </div>
            </section>
            <section className="pkg-book">
                <PkgContact />
            </section>
            </section>

            <section className="pkg-second pkg-include">
            <section className="pkg-data">
                <h1 className="secondary-head">Package Inclusion</h1>
                <div className="pkg-drop later-dropdown">
                    <div className="pkg-item item-later" onClick={dropOpen7}>
                        <span></span>
                        <div>
                            <i className={open7 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Flights & transportation
                            <i className={open7 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div> 
                    {open7 && 
                    <div data-aos="fade-in"  
                    className='drop-item'>
                        <p>
                            <p>From Chicago to Los Angeles, economy class flight by Air US</p>
                            <p>Los Angeles to New York, business class flight by NewYork Airlines</p>
                            <p>And, finally, return flight to Chicago from New York by Air Infestia</p> 
                        </p>
                    </div>
                    }             
                    <div className="pkg-item item-later" onClick={dropOpen8}>
                        <span></span>
                        <div>
                            <i className={open8 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Accomodation
                            <i className={open8 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open8 && 
                    <div data-aos="fade-in" className='drop-item'>
                        <p>
                            <p>2 nights at Georgia Hotel</p>
                            <p>3 nights at Eglamsia Resort</p>
                            <p>2 nights  at NewPublic Preliminary Resort & Restaurent</p>
                            <p>Including daily breakfast, lunch & dinner</p>
                        </p>
                    </div>
                    }
                    <div className="pkg-item item-later" onClick={dropOpen9}>
                        <span></span>
                        <div>
                            <i className={open9 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Tours & Activities
                            <i className={open9 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open9 && 
                    <div data-aos="fade-in" className='drop-item'>
                        <p>
                            <p>Visiting Shining Temple of Chicago</p>
                            <p>Visiting Science Museum of New York</p>
                            <p>A visit at Great Art Gallery of Leonardo Da Vinci in Los Angeles</p>
                            <p>Roaming around the Google Campus & Headquarter in NewYork</p>
                            <p>A hiking trip at the Last Berg Hill in Chicago</p>
                            <p>Hawaii Beach Tour</p>
                        </p>
                    </div>
                    }
                    <div className="pkg-item item-later" onClick={dropOpen10}>
                        <span></span>
                        <div>
                            <i className={open10 ? 'show-dot':'noshow-dot'}><GoPrimitiveDot /></i>
                        </div>
                        <a>
                            Others
                            <i className={open10 ? 'openIcon' : 'closedIcon'}>
                            <FaAngleDown />
                            </i>
                        </a>
                    </div>
                    {open10 && 
                    <div data-aos="fade-in" className='drop-item'>
                        <p>
                            <p>Emergency Medical Facility</p>
                            <p>Hygiency Accomodation</p>
                            <p>Safe Travel</p>
                            <p>Refund policy</p>
                            <p>Can cancel the trip anytime before 2 days of the trip</p>
                            <p>Co-operating stuffs, crew & workers</p>
                            <p>For any queries, customer can contact our agency via social media, mobile phone, email etc</p>
                        </p>
                    </div>
                    }
                </div>
            </section>
            <section>
                    
            </section>
            </section>
        </section>
        </>
    );
}