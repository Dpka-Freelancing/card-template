import React from "react";


import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallSharp, IoLocation } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiMailAiFill } from "react-icons/ri";


import logo from "../Assest/Images/t7/logo.png";

import About from "../Component/About";
import Product from "../Component/Product";
import Feature from "../Component/Feature";
import Payment from "../Component/Payment";
import Gallery from "../Component/Gallery";
import Feedback from "../Component/Feedback";
import Copyrights from "../Component/Copyright";
import Share from "../Component/Share-card";
import Menubttm from "../Component/Menu";
import Reviews from "../Component/Rating";
import YouTubePopup from "../Component/Video";

// Images
import img1 from "../Assest/Images/Icons/startup.png";
import img2 from "../Assest/Images/Icons/call.png";
import img3 from "../Assest/Images/Icons/messenger.png";
import img4 from "../Assest/Images/Icons/mail.png";
import img5 from "../Assest/Images/Icons/pin1.png";
import img6 from "../Assest/Images/Icons/hand-graving-smartphone.png";
import img7 from "../Assest/Images/Icons/world-wide-web.png";
import img9 from "../Assest/Images/Icons/online-shopping.png";
import img13 from "../Assest/Images/Icons/rating.png";
import img19 from "../Assest/Images/t2/puppy.png";

import galleryImages from "../Assest/Images/t3/gal1.jpeg";
import galleryImages1 from "../Assest/Images/t3/gal2.jpg";

const T7 = ({
  theme = "template-bg7",
  page = "hm-t7",
  bckgnd = "back-g-t7",
  fnts = "t7",
}) => {

     const headerContent = {
    heading: "QuickKart Local",
    subHeading: "Your Neighborhood Delivery Partner!",
   // description: "At EduQuest Academy, we believe that every student has the potential to achieve greatness with the right guidance and support. Our expert tutors provide high-quality coaching across various subjects to help students excel in academics and beyond.",
    // buttonText: "Book a Call",
    // buttonLink: "/contact",
    // address: "8D/4 Malaya Street, Kodikkalpanalyam, Thiruvarur, 610001",
    socialLinks: {
      youtube: "#",
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      twitter: "#"
    }
  };


  const aboutContent = {
    company: "Boba Cafe",
    category: "Bubble Tea & Cafe",
    year: "2024",
    nature:
      "Bringing joy with handcrafted bubble teas, refreshing drinks, and cozy ambiance.",
    specialties: [
      "Wide range of Boba flavors and toppings",
      "Relaxing space for friends and family",
      "Freshly brewed tea and organic ingredients",
      "Quick service with quality",
      "Customizable drinks for every taste",
    ],
  };

  const productContent = {
    heading: "Our Specialties",
    highlight: "Bubble Teas, Coffee, Smoothies & More",
    description:
      "Sip, relax, and enjoy our handcrafted beverages made with love. From classic milk teas to fruity boba and energizing coffees, Boba Cafe has something for everyone!",
    callToAction: "Try our bestsellers and refresh your mood today!",
    keyFeatures: [
      "Premium Tapioca Pearls",
      "Refreshing Fruit Teas",
      "Iced Coffees & Lattes",
      "Snacks & Pastries",
      "Cozy Ambience for All Ages",
    ],
    image: img19,
    ctaHeading: "Contact Us",
    ctaButtonText: "Place Order",
    ctaLink: "/contact",
  };

  const featureContent = {
    heading: "Why Choose Boba Cafe?",
    icon: img1,
    features: [
      { icon: img2, title: "Fresh Ingredients", desc: "Only the best for our drinks." },
      { icon: img3, title: "Variety of Flavors", desc: "Something new every week!" },
      { icon: img4, title: "Fast Service", desc: "Great drinks, no waiting." },
      { icon: img5, title: "Great Ambience", desc: "Perfect hangout spot." },
      { icon: img6, title: "Loyalty Rewards", desc: "Get rewards with every sip." },
      { icon: img7, title: "Online Ordering", desc: "Skip the line, order online." },
      { icon: img9, title: "Affordable Pricing", desc: "Premium drinks at best prices." },
      { icon: img13, title: "Rated 4.8+", desc: "Loved by thousands of happy customers." },
    ],
    image: img19,
    ctaHeading: "Call to Order",
    ctaButtonText: "WhatsApp Us",
    ctaLink: "/contact",
  };

  const paymentContent = {
    upi: ["Paytm", "PhonePe", "Google Pay"],
    upiNumber: "+91-9876543210",
    bank: {
      name: "HDFC Bank",
      account: "123456789012",
      ifsc: "HDFC0001234",
    },
  };

  const galleryContent = {
    images: [galleryImages, galleryImages1],
  };

  const reviewsContent = [
    {
      name: "Anjali Mehta",
      date: "Feb 18, 2025",
      stars: 5,
      review: "Loved the ambience and the bubble tea was amazing!",
    },
    {
      name: "Ravi Kumar",
      date: "Jan 22, 2025",
      stars: 4,
      review: "Good drinks, though I’d like more snack options.",
    },
    {
      name: "Fatima",
      date: "Dec 5, 2024",
      stars: 5,
      review: "Best boba in town. Highly recommend!",
    },
  ];

  const shareContent = {
    mapUrl:
      "https://maps.google.com/maps?q=boba+cafe&t=&z=13&ie=UTF8&iwloc=&output=embed",
    shareText: "Visit Boba Cafe and discover your new favorite drink!",
  };

  return (
    <div className={`template-bg pt-3 pb-2 ${theme}`} id="home">
      <div className="v-template1">
        <div className={`contain-template ${bckgnd} ${page} spl-bghm`}>
             <div className={`temp ${fnts} pt-1`}>
            <div className="container">
              <div className="row">
            

                <div className={`social-icon mt-2 mb-4 ${fnts}`}>
                  <a href={headerContent.socialLinks.youtube} className="youtube"><i><FaYoutube /></i></a>
                  <a href={headerContent.socialLinks.linkedin} className="linkedin"><i><FaLinkedinIn /></i></a>
                  <a href={headerContent.socialLinks.instagram} className="instagram"><i><FaInstagram /></i></a>
                  <a href={headerContent.socialLinks.facebook} className="facebook"><i><FaFacebookF /></i></a>
                  <a href={headerContent.socialLinks.twitter} className="twiter"><i><FaXTwitter /></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className={`logo pt-3 ${fnts}`}>
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="temp-head mt-4">
                <h1 className={`${fnts}`}>{headerContent.heading}</h1>
                <h3 className={`${fnts} pt-4`}>{headerContent.subHeading}</h3>
              </div>
            </div>
            <div className="row">
                      <div className={`social-icon foot-hme mt-2 mb-2 ${fnts}`}>
                          <a href="#" className="call">
                            <i>
                              <IoCallSharp />
                            </i>
                          </a>
                          <a href="#" className="whats-app">
                            <i>
                              <FaWhatsappSquare />
                            </i>
                          </a>
                          <a href="#" className="location">
                            <i>
                              <IoLocation />
                            </i>
                          </a>
                          <a href="#" className="mail">
                            <i>
                              <RiMailAiFill />
                            </i>
                          </a>
                        </div>
            </div>
          </div>
     

         
        </div>
      </div>

      <div id="about">
        <About bckgnd={bckgnd} fnts={fnts} content={aboutContent} />
      </div>
      <div id="product">
        <Product bckgnd={bckgnd} fnts={fnts} content={productContent} />
      </div>
      <div id="feature">
        <Feature bckgnd={bckgnd} fnts={fnts} content={featureContent} />
      </div>
      <div id="gallery">
        <Gallery bckgnd={bckgnd} fnts={fnts} content={galleryContent} />
      </div>
      <div id="videogallery">
        <YouTubePopup bckgnd={bckgnd} fnts={fnts} />
      </div>
      <div id="payment">
        <Payment bckgnd={bckgnd} fnts={fnts} content={paymentContent} />
      </div>
      <div id="review">
        <Reviews bckgnd={bckgnd} fnts={fnts} content={reviewsContent} />
      </div>
      <div id="feedback">
        <Feedback bckgnd={bckgnd} fnts={fnts} />
      </div>
      <div id="share">
        <Share bckgnd={bckgnd} fnts={fnts} content={shareContent} />
      </div>

      <Copyrights bckgnd={bckgnd} fnts={fnts} />
      <Menubttm fnts={fnts} />
    </div>
  );
};

export default T7;
