import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pageCSS/SliderElem.css";
import sliderItem from '../assets/pexels-ella-olsson-1640777.jpg';
import sliderItem2 from '../assets/pexels-mike-glezos-3279885.jpg';
import sliderItem3 from '../assets/pexels-nandhu-kumar-450441.jpg';
import sliderItem4 from '../assets/pexels-vecislavas-popa-1571460.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Controller
} from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
SwiperCore.use([Navigation, Pagination]);

export default function SliderElem() {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleClose4 = () => setShow4(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShow4 = () => setShow4(true);

return (
    <>
        <div className="container">
            <Swiper
            className="swiper"
            spaceBetween={20}
            slidesPerView={2}
            navigation
            controller={{ control: controlledSwiper }}
            >
            <SwiperSlide className="swiper-slider">
                <div className="swiper-elem" onClick={handleShow}>
                <img
                    className="img"
                    src={sliderItem}
                    alt="image"
                />
                <div className="swiper-caption">
                    <h1>Tour to Washington</h1>
                    <p>2 Days, 3 Nights</p>
                </div>
                </div>
                <button>Buy Now</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body> 
                    <img width="100%" src={sliderItem} alt="package"/>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-capt">
                        <h1>Tour to Washington</h1>
                        <p>2 days, 3 Nights</p>
                        <p>A visit at Palm Island</p>
                        <p>A visit at Fistone Museum</p>
                        <p>A visit at the largest shopping mall of Dubai</p>
                        <p>Beach swimming & yacht trip</p>    
                    </div>
                    <button>Buy Now</button> 
                </Modal.Footer>
            </Modal>
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">    
                <div className="swiper-elem" onClick={handleShow2}>
                <img
                    className="img"
                    src={sliderItem2}
                    alt="image"
                />
                <div className="swiper-caption">
                    <h1>Tour to Amsterdam</h1>
                    <p>3 Days, 4 Nights</p>
                </div>
                </div>
                    <button>Buy Now</button>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Body> 
                    <img width="100%" src={sliderItem2} alt="package"/> 
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-capt">
                        <h1>Tour to Amsterdam</h1>
                        <p>3 days, 4 Nights</p>
                        <p>A visit at Palm Island</p>
                        <p>A visit at Fistone Museum</p>
                        <p>A visit at the largest shopping mall of Dubai</p>
                        <p>Beach swimming & yacht trip</p>    
                    </div>
                    <button>Buy Now</button> 
                </Modal.Footer>
            </Modal>    
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
                <div className="swiper-elem" onClick={handleShow3}>
                <img
                    className="img"
                    src={sliderItem3}
                    alt="image"
                />
                <div className="swiper-caption">
                    <h1>Tour to Denmark</h1>
                    <p>5 Days, 6 Nights</p>
                </div>
                </div>
                    <button>Buy Now</button>
            <Modal show={show3} onHide={handleClose3}>
                <Modal.Body> 
                    <img width="100%" src={sliderItem3} alt="package"/> 
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-capt">
                        <h1>Tour to Denmark</h1>
                        <p>5 days, 6 Nights</p>
                        <p>A visit at Palm Island</p>
                        <p>A visit at Fistone Museum</p>
                        <p>A visit at the largest shopping mall of Dubai</p>
                        <p>Beach swimming & yacht trip</p>    
                    </div>
                    <button>Buy Now</button> 
                </Modal.Footer>
            </Modal>
            </SwiperSlide> 
            <SwiperSlide className="swiper-slider"> 
                <div className="swiper-elem" onClick={handleShow4}>
                <img
                    className="img"
                    src={sliderItem4}
                    alt="image"
                />
                <div className="swiper-caption">
                    <h1>Tour to Dubai</h1>
                    <p>6 days, 7 Nights</p>
                </div>
                </div>
                    <button>Buy Now</button>
            <Modal show={show4} onHide={handleClose4}>
                <Modal.Body> 
                    <img width="100%" src={sliderItem4} alt="package"/> 
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-capt">
                        <h1>Tour to Dubai</h1>
                        <p>6 days, 7 Nights</p>
                        <p>A visit at Palm Island</p>
                        <p>A visit at Fistone Museum</p>
                        <p>A visit at the largest shopping mall of Dubai</p>
                        <p>Beach swimming & yacht trip</p>    
                    </div>
                    <button>Buy Now</button> 
                </Modal.Footer>
            </Modal>
            </SwiperSlide>  
            </Swiper>
        </div>
        </>
    );
}
