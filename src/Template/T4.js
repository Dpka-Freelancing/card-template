import React from "react";

import { IoCallSharp, IoLocation } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiMailAiFill } from "react-icons/ri";


import logo from "../Assest/Images/t4/logo.png"

import About from '../Component/About';
import Product from "../Component/Product";
import Feature from "../Component/Feature";
import Payment from "../Component/Payment";
import Gallery from "../Component/Gallery";
import Feedback from "../Component/Feedback";
import Copyrights from "../Component/Copyright";
import Share from "../Component/Share-card";
import Menubttm from "../Component/Menu";
import Reviews from "../Component/Rating";





const T4 = ({theme = "template-bg4", page = "hm-t4", bckgnd = "back-g-t4", fnts = "t4" }) => {


    return (
        <div className={`template-bg  pt-3 pb-2 ${theme}`} id="home">
            <div className="v-template1">
                <div className={`contain-template ${bckgnd} ${page} `}>
                    <div className="container">
                        <div className="row">
                            <div className={`logo ${fnts}`}>
                                <img src={logo} alt="logo" className="img-fluid" />
                            </div>
                            <div className="temp-head mt-4">
                                <h1 className={`${fnts}`}>BOBA CAFE</h1>
                                <h3 className={`${fnts}`}>Welcome to Boba Cafe Sip, Relax & Enjoy! </h3>
                                <p className={`${fnts}`}>At Boba Cafe, we bring you the perfect blend of taste and happiness with our delicious bubble teas, refreshing beverages, and tasty treats. Whether you’re a fan of classic milk tea, fruity flavors, or chewy tapioca pearls, we have something to satisfy every craving!</p>
                            </div>

                            <div className={`social-icon mt-2 mb-2 ${fnts}`}>
                                <a href="" className="call"><i><IoCallSharp /></i></a>
                                <a href="" className="whats-app"><i><FaWhatsappSquare /></i></a>
                                <a href="" className="location"><i><IoLocation /></i></a>
                                <a href="" className="mail"><i><RiMailAiFill /></i></a>
                            </div>

                            <div className={`share-btn mb-5 mt-5 ${fnts}`}>
                                <button type="button" className={`sh-qr hme ${fnts}`}>Schedule a visit</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="about"><About bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="product"><Product bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="feature"><Feature bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="gallery"><Gallery bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="payment"><Payment bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="review"><Reviews bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="feedback"><Feedback bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="share"><Share bckgnd={bckgnd} fnts={fnts} /></div>

            <Copyrights bckgnd={bckgnd} fnts={fnts} />
            <Menubttm fnts={fnts} />
        </div>
    );
};

export default T4