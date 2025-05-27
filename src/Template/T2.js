import React from "react";
import { IoCallSharp, IoLocation } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { RiMailAiFill } from "react-icons/ri";
import logo from "../Assest/Images/t2/Group.png";

// Components
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


import galleryImages from "../Assest/Images/t2/cat1.jpg";
import galleryImages1 from "../Assest/Images/t2/Cat.jpg";



// Import all feature images from old feature.js
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
import YouTubePopup from "../Component/Video";


const T2 = ({ phone, whatsapp, locationUrl, theme = "template-bg2", page = "hm-t2", bckgnd = "back-g-t2", fnts="t2" }) => {
  // Header Content
  const headerContent = {
    logo: {
      src: logo,
      alt: "Pets World logo",
      className: "img-fluid",
      style: {
        width: "180px",
        height: "auto"
      }
    },
    headings: {
      main: "Pets World",
      sub: "Welcome to Pets World - Your Pet's Favorite Place!",
      description: "At Pets World, we provide everything your pet needs to stay happy and healthy—whether it's a playful pup, a curious cat, a chirping bird, or a swimming companion!"
    },
    contactIcons: [
      { 
        icon: <IoCallSharp />,
        className: "call",
        link: `tel:${phone}`
      },
      { 
        icon: <FaWhatsappSquare />,
        className: "whats-app",
        link: `https://wa.me/${whatsapp}`,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      { 
        icon: <IoLocation />,
        className: "location",
        link: locationUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      { 
        icon: <RiMailAiFill />,
        className: "mail",
        link: "mailto:info@petsworld.example"
      }
    ],
    ctaButton: {
      text: "Schedule a visit",
      className: "sh-qr hme"
    }
  };

  // About Content
  const aboutContent = {
    company: 'Pets World',
    category: 'Pet Shop',
    year: '2025',
    nature: 'Providing quality pet supplies, food, accessories, and live pets for a happy and healthy pet life.',
    specialties: [
      'Experienced & Passionate Team – Dedicated pet lovers with expert knowledge.',
      'Customer-First Approach – We prioritize your pet\'s needs and happiness.',
      'Quality & Ethical Practices – Only the best products, ensuring pet safety and well-being.',
      'Timely Service & Delivery – Fast and reliable access to pet essentials.',
      'Bulk Order Capability – Serving both individual pet owners and businesses.',
    ]
  };

  // Product Content
  const productContent = {
    heading: "Products/Services",
    highlight: "Everything Your Pet Needs at Pets World",
    description: "No matter what pet you have, find the best food, accessories, and care products all in one place at Pets World!",
    callToAction: "Visit pets world today & give your pet the love they deserve",
    keyFeatures: [
      "Wide range of pet food, toys, and essentials",
      "Expert advice for pet care and well-being",
      "Affordable prices with top-quality products",
      "Convenient & secure payment options",
      "Friendly service from passionate pet lovers",
    ],
    image: "../Assest/Images/t2/puppy.png",
    ctaHeading: "Call Shop",
    ctaButtonText: "Enquiry",
    ctaLink: "/contact",
  };

   const paymentContent = {
    upi: ["Paytm", "PhonePe", "Google Pay"],
    upiNumber: "+91-xxxxxxxxxx",
    bank: {
      name: "Indian Bank",
      account: "01108010000xxxx5",
      ifsc: "IDIB000PXXX",
    },
  };

const featureContent = {
    heading: "Pets World – Your One-Stop Pet Shop!",
    icon: img1, // Using startup icon as main feature icon
    features: [
      { 
        icon: img2, // call icon
        title: "Expert Pet Guidance", 
        desc: "Get professional advice on pet care, nutrition, and training." 
      },
      { 
        icon: img3, // messenger icon
        title: "Wide Range of Pet Products", 
        desc: "Find top-quality pet food, toys, accessories, and healthcare essentials." 
      },
      { 
        icon: img4, // mail icon
        title: "Live Pets Available", 
        desc: "Adopt adorable puppies, kittens, birds, fish, and more!" 
      },
      { 
        icon: img5, // pin1 icon
        title: "Hassle-Free Shopping", 
        desc: "Easy ordering, secure payments, and doorstep delivery." 
      },
      { 
        icon: img6, // smartphone icon
        title: "Exciting Offers & Discounts", 
        desc: "Enjoy seasonal deals and exclusive member benefits." 
      },
      { 
        icon: img7, // world-wide-web icon
        title: "Customer Reviews & Ratings", 
        desc: "See what fellow pet lovers say about our products and services." 
      },
      { 
        icon: img9, // online-shopping icon
        title: "Personalized Recommendations", 
        desc: "We help you choose the best products for your pet's unique needs." 
      },
      { 
        icon: img13, // rating icon
        title: "Customer Reviews", 
        desc: "Read what our pet parents say." 
      }
    ],
    image: img19, // puppy.png from t2 folder
    ctaHeading: "Call Shop",
    ctaButtonText: "Enquiry",
    ctaLink: "/contact"
  };


  // Gallery Content
  const galleryContent = {
    images: [
      galleryImages,
      galleryImages1,
    ],
  };

  // Reviews Content
  const reviewsContent = [
    {
      name: "Nisar Sulthan",
      date: "November 8, 2024",
      stars: 5,
      review:
        "Excellent service! Highly recommend. The team was very professional and delivered on time.",
    },
    {
      name: "Mohammed Bakkar",
      date: "October 25, 2024",
      stars: 4,
      review:
        "Great experience overall. The product quality was good, but there was a slight delay in delivery.",
    },
    {
      name: "Sathu Lee",
      date: "September 30, 2024",
      stars: 3,
      review: "Average experience. The service was decent but not exceptional.",
    },
    {
      name: "Selvaraj",
      date: "August 15, 2024",
      stars: 5,
      review:
        "Fantastic! Couldn't have asked for a better experience. Will use their services again.",
    },
    {
      name: "Vasanth",
      date: "April 15, 2024",
      stars: 3,
      review:
        "It was okay. Some parts of the service were good, others not so much.",
    },
        {
      name: "Sathu Lee",
      date: "September 30, 2024",
      stars: 3,
      review: "Average experience. The service was decent but not exceptional.",
    },
    {
      name: "Selvaraj",
      date: "August 15, 2024",
      stars: 5,
      review:
        "Fantastic! Couldn't have asked for a better experience. Will use their services again.",
    },
    {
      name: "Vasanth",
      date: "April 15, 2024",
      stars: 3,
      review:
        "It was okay. Some parts of the service were good, others not so much.",
    }
  ];

  // Share Content
  const shareContent = {
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197704994483!2d-122.41941538468148!3d37.77492977975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b7c9dff%3A0x5e262e0b56c37a20!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1588017366922!5m2!1sen!2sus",
    shareText: "Check out my SpotCard digital business card!",
  };


 

  return (
    <div className={`template-bg pt-3 pb-2 ${theme}`} id="home">
      <div className="v-template1">
        <div className={`contain-template ${bckgnd} ${page}`}>
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className={`logo-t1 ${fnts}`}>
                <img
                  src={headerContent.logo.src}
                  alt={headerContent.logo.alt}
                  className={headerContent.logo.className}
                  style={headerContent.logo.style}
                />
              </div>
              
              {/* Headings */}
              <div className="temp-head mt-4">
                <h1 className={fnts}>{headerContent.headings.main}</h1>
                <h3 className={fnts}>{headerContent.headings.sub}</h3>
                <p className={fnts}>{headerContent.headings.description}</p>
              </div>
              
              {/* Contact Icons */}
              <div className={`social-icon mt-2 mb-2 ${fnts}`}>
                {headerContent.contactIcons.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className={item.className}
                    target={item.target || ""}
                    rel={item.rel || ""}
                  >
                    <i>{item.icon}</i>
                  </a>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className={`share-btn mb-5 mt-5 ${fnts}`}>
                <button type="button" className={`${headerContent.ctaButton.className} ${fnts}`}>
                  {headerContent.ctaButton.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="about"><About bckgnd={bckgnd} fnts={fnts} content={aboutContent} /></div>
      <div id="product"><Product bckgnd={bckgnd} fnts={fnts} content={productContent} /></div>
      <div id="feature"><Feature bckgnd={bckgnd} fnts={fnts} content={featureContent} /></div>
      <div id="gallery"><Gallery bckgnd={bckgnd} fnts={fnts} content={galleryContent} /></div>
      <div id="videogallery">
        <YouTubePopup bckgnd={bckgnd} fnts={fnts} />
      </div>
      <div id="payment"><Payment bckgnd={bckgnd} fnts={fnts} content={paymentContent} /></div>
      <div id="review"><Reviews bckgnd={bckgnd} fnts={fnts} content={reviewsContent} /></div>
      <div id="feedback"><Feedback bckgnd={bckgnd} fnts={fnts} /></div>
      <div id="share"><Share bckgnd={bckgnd} fnts={fnts} content={shareContent} /></div>

      <Copyrights bckgnd={bckgnd} fnts={fnts} />
      <Menubttm fnts={fnts} />
    </div>
  );
};

export default T2;