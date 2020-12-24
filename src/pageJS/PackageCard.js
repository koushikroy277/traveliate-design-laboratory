import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../pageCSS/PackageCard.css';
import PackageData from './PackageData';

export default function PackageCard() {
    return (
        <>
            <section className="main-pkg">
                <div className="main-head">
                    <h1>Domestic Packages</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laborum debitis corrupti eaque commodi impedit rerum. Exercitationem, earum culpa corporis doloribus dolor molestiae pariatur maxime repellat? Eum magni quas doloribus?Tenetur facere labore numquam vitae amet quia nobis officiis in itaque, alias fuga architecto laboriosam necessitatibus autem officia suscipit, fugit quo. Dolorem, dolores fugiat delectus amet quidem a at deserunt.</p>
                </div>
                <section className="primary-pkg">
                    {PackageData.map((data)=>{
                        const { imgsrc, head, para, url } = data;
                        return(
                            <div className="pkg-card">
                            <Link
                            to="/packageInfo" >
                                <img src={imgsrc} alt="package"/>
                                <div className="pkg-head">
                                    <div>
                                        <h1>{head}
                                        </h1>
                                        <p>{para}</p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        )
                    })}
                </section>
                <section className="secondary-pkg">
                    <h1>Plan Your Package</h1>
                    <p>For a truly unique experience, contact one of our travel advisors via WhatsApp or enter your details and we will contact you to help customise your package</p>
                    <Link to="#" className="button">Make a Call <i><FaPhone /></i> </Link>
                </section>
            </section>
        </>
    )
}
