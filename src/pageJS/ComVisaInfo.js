import React, { useState } from 'react';
import '../pageCSS/ComVisaInfo.css';
import {FaAngleRight} from 'react-icons/fa';
import {Accordion, Card} from 'react-bootstrap';
import VisaSlide from './VisaSlide';

export default function VisaInfo(props) {
    const [iconOpen, setIconOpen] = useState(false);
    const [iconOpen2, setIconOpen2] = useState(false);
    const [iconOpen3, setIconOpen3] = useState(false);
    const [iconOpen4, setIconOpen4] = useState(false);

    const down = () => {
        setIconOpen(!iconOpen);
    }
    const down2 = () => {
        setIconOpen2(!iconOpen2);
    }
    const down3 = () => {
        setIconOpen3(!iconOpen3);
    }
    const down4 = () => {
        setIconOpen4(!iconOpen4);
    }
    return (
        <>
            <section className="page-header">
                <h1>{props.visaHead}</h1>
            </section>
            <section className="com-visa">
                <section className={props.classBanner}>
                    <h1>{props.visaHead}</h1>
                </section>
                <section className="com-visa-info">
                    <section className="com-visa-head">
                        <h1>{props.visaHead} required for Bangladeshi</h1>
                        <h3>Visa processing Fee {props.visaFee}</h3>
                    </section>
                    <section className="com-visa-para" data-aos="fade-up">
                        <section className="com-base-sect">
                            <h4>Basic Documents:</h4>
                            <ol>
                                <li>Six (06) Months Valid Passport with Old Passport if have.</li>
                                <li>Personal Bank Statement of Last Six (06) Months. (Transaction must be regular).</li>
                                <li>Bank Solvency Certificate.</li>
                                <li>NID copy.</li>
                                <li>Birth Certificate (Only for Child& infant).</li>
                                <li>Marriage Certificate.</li>
                                <li>For Doctor BMDC certificate.
                                </li>
                                <li>For Advocate BAR council Certificate.</li>
                                <li>Fixed Deposit Copy with Certificate from Bank.
                                </li>
                                <li>Asset Valuation (Summary of Property, Bank Statement, Fixed Deposit and other Financial Documents).
                                </li>
                                <li>TAX Certificate</li>
                                <li>TIN Certificate.
                                </li>
                                <li>Credit Card Copy (If).</li>
                            </ol>
                        </section>
                        <section className="com-stud-sect">
                        <Accordion className="Accordion">
                        <Card onClick={down} className="Card">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="CardHeader">
                            For Students
                            <i><FaAngleRight className={iconOpen ? 'down-icon': 'icon'}/></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0" className="CardCollapse">
                            <Card.Body className="CardBody">
                                <ol>
                                    <li>School ID photocopy.</li>
                                    <li>NOC from school.</li>
                                    <li>Visa & Application Center Fee BDT 10593/-</li>
                                    <li>Visa processing and Consultancy fee BDT 12000/- per person (With invitation).</li>
                                    <li>BDT 5000/- per person (Without invitation).</li>
                                </ol>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card onClick={down2} className="Card">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="CardHeader">
                            For Job Holders
                            <i><FaAngleRight className={iconOpen2 ? 'down-icon': 'icon'}/></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1" className="CardCollapse">
                            <Card.Body className="CardBody">
                                <ol>
                                    <li>NOC / Forwarding Letter.</li>
                                    <li>Office ID card copy.</li>
                                    <li>G.O (Government Order) for Official Passport only.</li>
                                    <li>Salary slips for the last six months (If Any).</li>
                                </ol>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card onClick={down3} className="Card">
                            <Accordion.Toggle as={Card.Header} eventKey="3" className="CardHeader">
                            Note
                            <i><FaAngleRight className={iconOpen3 ? 'down-icon': 'icon'}/></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3" className="CardCollapse">
                            <Card.Body className="CardBody">
                                <ol>
                                    <li>Visa Processing Fee Non-refundable.</li>
                                    <li>Visa rate can be changed without prior notice.</li>
                                    <li>Visa issuance rights reserved by the Embassy.</li>
                                </ol>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card onClick={down4} className="Card">
                            <Accordion.Toggle as={Card.Header} eventKey="4" className="CardHeader">
                            For Business Person
                            <i><FaAngleRight className={iconOpen4 ? 'down-icon': 'icon'}/></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4" className="CardCollapse">
                            <Card.Body className="CardBody">
                                <ol>
                                    <li>Company Bank Statement of Last Six Months (Transaction must be regular).</li>
                                    <li>Blank Page of Office Pad.</li>
                                    <li>Renewal Trade License.</li>
                                    <li>Company Bank Statement of Last Six Months (Transaction must be regular).</li>
                                    <li>Memorandum for Limited Company.</li>
                                </ol>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </section>
                    </section>
                </section>
            </section>
            <section className="page-header visa-comHeader">
                <h1>Some more visa services</h1>
            </section>
            <section className="visa-slider">
                <VisaSlide />
            </section>
        </>
    )
}
