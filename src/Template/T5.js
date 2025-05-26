import React from "react";

import { IoLocation } from "react-icons/io5";
import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import logo from "../Assest/Images/t3/logo.png"

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



const T5 = ({ phone, whatsapp, locationUrl, theme = "template-bg5", page = "hm-t5", bckgnd = "back-g-t5", fnts = "t5" }) => {

    const handleAddToContact = () => {
        const vcfContent = `
BEGIN:VCARD
VERSION:3.0
N:Spotcard;;;;
FN:Spotcard
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=PREF,INTERNET:info@spotcard.in
URL:https://spotcard.in/
ADR;TYPE=WORK:;;Chennai, Tamil Nadu, India - 600001;;;;
END:VCARD
        `.trim();

        const blob = new Blob([vcfContent], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Spotcard.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className={`template-bg  pt-3 pb-2 ${theme}`} id="home">
            <div className="v-template1">
                <div className={`contain-template ${bckgnd} ${page} `}>
                    <div className="container">
                        <div className="row">
                            <div className={`logo pt-3 ${fnts}`}>
                                <img src={logo} alt="logo" className="img-fluid" />
                            </div>
                            <div className="temp-head mt-4">
                                <h1 className={`${fnts}`}>PHOTO STUDIO</h1>
                                <h3 className={`${fnts}`}>Capturing Moments, Creating Memories! </h3>
                            </div>

                        </div>
                    </div>
                    <div className={`temp ${fnts} pt-3`}>
                        <div className="container">
                            <div className="row">
                                <div className="temp-head mt-4">
                                    <p className={`${fnts}`}>At Photo Studio, we turn your special moments into timeless memories. Whether it’s a wedding, birthday, corporate event, or a casual photoshoot, our expert photographers ensure every shot is perfect!</p>
                                </div>
                                <div className="info-temp mt-4">
                                    <div className={`infot1 ${fnts}`}>
                                        <i><IoLocation /></i>
                                        <p>8D/4 Malaya Street, Kodikkalpanalyam,
                                            Thiruvarur,610001 </p>
                                    </div>

                                </div>
                                <div className={`share-btn mb-3 mt-3 ${fnts}`}>
                                    <button type="button" className={`sh-qr hme ${fnts}`}>Book a Call</button>
                                </div>

                                <div className={`social-icon mt-2 mb-4 ${fnts}`}>
                                    <a href="" className="you-tube"><i><FaYoutube /></i></a>
                                    <a href="" className="linked-in"><i><FaLinkedinIn /></i></a>
                                    <a href="" className="insta"><i><FaInstagram /></i></a>
                                    <a href="" className="facebook"><i><FaFacebookF /></i></a>
                                    <a href="" className="twiter"><i><FaXTwitter /></i></a>
                                </div>
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
            <Menubttm fnts={fnts}/>
        </div>
    );
};

export default T5