import React from "react";

import { IoCallSharp, IoLocation } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiMailAiFill } from "react-icons/ri";


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



const T3 = ({ phone, whatsapp, locationUrl, theme = "template-bg3", page = "hm-t3", bckgnd = "back-g-t3", fnts="t3" }) => {

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
          
            

              <div className={`share-btn mb-5 mt-5 ${fnts}`}>
                <button type="button" className={`sh-qr hme ${fnts}`}>Schedule a visit</button>
              </div>

               <div className={`social-icon mt-2 mb-2 ${fnts}`}>
                <a href="" className="call"><i><IoCallSharp /></i></a>
                <a href="" className="whats-app"><i><FaWhatsappSquare /></i></a>
                <a href="" className="location"><i><IoLocation /></i></a>
                <a href="" className="mail"><i><RiMailAiFill/></i></a>
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

export default T3