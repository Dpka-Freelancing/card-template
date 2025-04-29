import React from "react";

import { FaFlag, FaYoutube, FaLinkedinIn , FaInstagram , FaFacebookF} from "react-icons/fa";
import { RiGlobeFill, RiMailCheckFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../Assest/Images/logo1.png"

import About from '../Component/About';
import Product from "../Component/Product";
import Feature from "../Component/Feature";
import Payment from "../Component/Payment";
import Gallery from "../Component/Gallery";
import Feedback from "../Component/Feedback";
import Copyrights from "../Component/Copyright";
import Share from "../Component/Share-card";



const T1 = () => {

    return (
        <div className="template-bg1 pt-3 pb-3">
            <div className="v-template1">
                <div className="contain-template back-g hm">
                    <div className="container">
                        <div className="row">
                            <div className="logo-t1">
                                <img src={logo} alt="logo" className="img-fluid"/>
                            </div>
                            <div className="temp-head mt-4">
                                <h1 className="t1">Spotcard</h1>
                                <h3 className="t1">India's Leading Digital Vcard Agency</h3>
                            </div>
                            <div className="temp-hme btn mt-3">
                                <div className="btn-a">
                                    <a href="" className="navi-a">Call</a>
                                </div>
                                <div className="btn-a">
                                    <a href="" className="navi-a">Whatsapp</a>
                                </div>
                                <div className="btn-a">
                                    <a href="" className="navi-a">Direction</a>
                                </div>


                            </div>
                            <div className="info-temp mt-4 ">
                                <div className="infot1">
                                    <i><FaFlag /></i>
                                    <p>Chennai , Tamil Nadu , India - 600001</p>
                                </div>
                                <div className="infot1">
                                    <i><RiMailCheckFill /></i>
                                    <p>info@spotcard.in</p>
                                </div>
                                <div className="infot1">
                                    <i><RiGlobeFill /></i>
                                    <p>https://spotcard.in/</p>
                                </div>
                                <div className="infot1">
                                   <i> <MdCall /></i>
                                    <p>+91 93450 35514</p>
                                </div>
                            </div>
                            <div className="share-btn mt-4">
                            <button type="submit" className="sh-qr">Add To Contact</button>
                            <button type="submit" className="sve-qr">Save Card</button>

                        </div>
                        <div className="social-icon mt-5 mb-4">
                            <i><FaYoutube/></i>
                            <i><FaLinkedinIn /></i>
                            <i><FaInstagram /></i>
                            <i><FaFacebookF/></i>
                            <i><FaXTwitter/></i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Product />
            <Feature />
            <Payment />
            <Gallery />
            <Feedback />
            <Share />
            <Copyrights />

        </div>

    )

}

export default T1