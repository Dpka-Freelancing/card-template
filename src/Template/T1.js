import React from "react";

import { FaFlag, FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
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
import Menubttm from "../Component/Menu";
import Reviews from "../Component/Rating";

import img1 from '../Assest/Images/bg/Blob-4.png'
import img2 from '../Assest/Images/bg/Blob-7.png'



const T1 = ({ phone, whatsapp, locationUrl, theme = "template-bg1", page = "hm", bckgnd = "back-g", fnts="t1" }) => {

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
            <img src={img2} alt="Blob 7" className="blob blob-top" />
            <img src={img1} alt="Blob 4" className="blob blob-bottom" />
            <div className="v-template1">
                <div className={`contain-template ${bckgnd} ${page} `}>
                    <div className="container">
                        <div className="row">
                            <div className="logo-t1">
                                <img src={logo} alt="logo" className="img-fluid" />
                            </div>
                            <div className="temp-head mt-4">
                                <h1 className="t1">Spotcard</h1>
                                <h3 className="t1">India's Leading Digital Vcard Agency</h3>
                            </div>
                            <div className="temp-hme btn1 mt-3">
                                <div className="btn-a">
                                    <a href={`tel:${phone}`} className="navi-a">Call</a>
                                </div>
                                <div className="btn-a">
                                    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="navi-a">Whatsapp</a>
                                </div>
                                <div className="btn-a">
                                    <a href={locationUrl} target="_blank" rel="noopener noreferrer" className="navi-a">Direction</a>
                                </div>
                            </div>
                            <div className="info-temp mt-4">
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
                                    <i><MdCall /></i>
                                    <p>{phone}</p>
                                </div>
                            </div>
                            <div className="share-btn mt-4">
                                <button type="button" className="sh-qr" onClick={handleAddToContact}>Add To Contact</button>

                            </div>
                            <div className="social-icon mt-5 mb-4">
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


            <div id="about"><About bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="product"><Product bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="feature"><Feature bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="gallery"><Gallery bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="payment"><Payment bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="review"><Reviews bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="feedback"><Feedback bckgnd={bckgnd} fnts={fnts} /></div>
            <div id="share"><Share bckgnd={bckgnd} fnts={fnts} /></div>
            <Copyrights bckgnd={bckgnd} fnts={fnts} />
            <Menubttm />
        </div>
    );
};

export default T1