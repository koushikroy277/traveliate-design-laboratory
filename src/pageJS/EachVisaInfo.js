import React from 'react';
import ComVisaInfo from './ComVisaInfo';
import travel from '../assets/travel.jpg';

export default function EachVisaInfo() {
    return (
        <>
            <section className="each-visa">
                <ComVisaInfo 
                visaHead="Australian Visa"
                visaFee="BDT 4990/-"
                classBanner="aus-banner"/>
            </section>
        </>
    )
}
