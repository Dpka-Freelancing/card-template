import React from "react";
import {
  FaFlag,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { RiGlobeFill, RiMailCheckFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../Assest/Images/t8/logo.png";
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

import productImg from "../Assest/Images/Rectangle 24.png";
import galleryImages from "../Assest/Images/gal-2.png";
import galleryImages1 from "../Assest/Images/vc.jpg";


// First import all images at the top of T1.js
import featureMainIcon from "../Assest/Images/Icons/startup.png";
import callIcon from "../Assest/Images/Icons/call.png";
import whatsappIcon from "../Assest/Images/Icons/messenger.png";
import emailIcon from "../Assest/Images/Icons/mail.png";
import navigateIcon from "../Assest/Images/Icons/pin1.png";
import contactsIcon from "../Assest/Images/Icons/hand-graving-smartphone.png";
import websiteIcon from "../Assest/Images/Icons/world-wide-web.png";
import shareIcon from "../Assest/Images/Icons/loading-arrow.png";
import updateIcon from "../Assest/Images/Icons/updated.png";
import catalogIcon from "../Assest/Images/Icons/online-shopping.png";
import galleryIcon from "../Assest/Images/Icons/gallery.png";
import youtubeIcon from "../Assest/Images/Icons/youtube.png";
import paymentIcon from "../Assest/Images/Icons/salary.png";
import ratingIcon from "../Assest/Images/Icons/rating.png";
import enquiryIcon from "../Assest/Images/Icons/email.png";
import visitorIcon from "../Assest/Images/Icons/audience.png";
import spotcardIcon from "../Assest/Images/Icons/pin.png";
import featureMainImage from "../Assest/Images/Rectangle 24.png";


const T8 = ({
  phone,
  whatsapp,
  locationUrl,
  theme = "template-bg8",
  page = "hm-t8",
  bckgnd = "back-g-t8",
  fnts = "t8",
}) => {


  //home component 
  const headerContent = {
    logo: {
      src: logo,
      alt: "logo",
      
    },
    headings: {
      main: "Online Custom Gifting Store",
      sub: "Sell personalized gifts like mugs, photo frames, keychains, and digital gift cards."
      
    },
    
    buttons: [
      {
        type: "call",
        text: "Call",
        link: `tel:${phone}`
      },
      {
        type: "whatsapp",
        text: "Whatsapp",
        link: `https://wa.me/${whatsapp}`,
        target: "_blank",
        rel: "noopener noreferrer"
      },
      {
        type: "direction",
        text: "Direction",
        link: locationUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }
    ],
    splcnt:{
subpara: "Make Every Gift Personal Customized gifts made with love. Delivered to your doorstep."
    },
    infoItems: [
      {
        icon: <FaFlag />,
        text: "Chennai, Tamil Nadu, India - 600001"
      },
      {
        icon: <RiMailCheckFill />,
        text: "info@spotcard.in"
      },
      {
        icon: <RiGlobeFill />,
        text: "https://spotcard.in/"
      },
      {
        icon: <MdCall />,
        text: phone
      }
    ],
    socialIcons: [
      {
        platform: "youtube",
        icon: <FaYoutube />,
        link: ""
      },
      {
        platform: "linkedin",
        icon: <FaLinkedinIn />,
        link: ""
      },
      {
        platform: "instagram",
        icon: <FaInstagram />,
        link: ""
      },
      {
        platform: "facebook",
        icon: <FaFacebookF />,
        link: ""
      },
      {
        platform: "twitter",
        icon: <FaXTwitter />,
        link: ""
      }
    ]
  };


  // About Content
  const aboutContent = {
    company: "Spot Card",
    category: "Web development",
    year: "2025",
    nature:
      "Digital business card platform for easy, eco-friendly, and professional contact sharing.",
    specialties: [
      "Expert team with industry experience",
      "Customer-first approach for maximum",
      "Transparent and ethical business practices",
      "Timely service execution and delivery",
      "Capability to handle bulk requirements",
      "Multiple secure and hassle-free payment",
      "Tailor-made solutions to fit your unique needs",
      "Professional guidance and strategic consulting",
      "Integration of cutting-edge digital technology",
      "We listen, analyze, and deliver the right",
      "Proven track record with happy and satisfied",
      "Empowering businesses with innovative digital",
      "Reliable and 100% trustworthy service provider",
    ],
  };

  // Product Content
  const productContent = {
    heading: "Product / Service",
    highlight: "Digital Visiting Card + Daily Greetings Images",
    description:
      "No matter what business you do, share all your business details, products, and services easily with your customers through a SpotCard Digital Visiting Card!",
    callToAction:
      "Create your SpotCard today & grow your business effortlessly!",
    keyFeatures: [
      "Share your business details instantly with just one click",
      "Add website links, social media, and payment options",
      "QR code-enabled for quick and easy sharing",
      "Affordable, eco-friendly, and always accessible",
    ],
    image: productImg,
    ctaHeading: "Talk with our team",
    ctaButtonText: "Enquire",
    ctaLink: "/feedback#efrm",
  };

  // Feature Content
  const featureContent = {
    heading: "SpotCard Digital Vcard Features",
    icon: featureMainIcon,
    image: featureMainImage,
    ctaHeading: "Talk with our team",
    ctaButtonText: "Enquire",
    ctaLink: "/feedback#efrm",
    features: [
      {
        icon: callIcon,
        title: "Click to Call",
        desc: "Customers can call you instantly by tapping your phone number."
      },
      {
        icon: whatsappIcon,
        title: "Click to WhatsApp",
        desc: "Customers can WhatsApp you without saving your number."
      },
      {
        icon: emailIcon,
        title: "Click to Email",
        desc: "One-click email feature for easy communication."
      },
      {
        icon: navigateIcon,
        title: "Click to Navigate",
        desc: "Let customers find your location easily using Google Maps."
      },
      {
        icon: contactsIcon,
        title: "Add to Contacts",
        desc: "Customers can save all your details directly to their phone."
      },
      {
        icon: websiteIcon,
        title: "Website & Social Links",
        desc: "Direct access to your website and social media with a single click."
      },
      {
        icon: shareIcon,
        title: "Share Unlimited",
        desc: "Share your digital business card as many times as you want."
      },
      {
        icon: updateIcon,
        title: "Easy To Update",
        desc: "Update your details anytime, as often as needed."
      },
      {
        icon: catalogIcon,
        title: "Product Catalogue",
        desc: "Showcase up to 15 featured products/services with images and descriptions."
      },
      {
        icon: galleryIcon,
        title: "Photo Gallery",
        desc: "Display up to 20 business-related images for better engagement."
      },
      {
        icon: youtubeIcon,
        title: "YouTube Video Gallery",
        desc: "Enhance customer experience with business-related YouTube videos."
      },
      {
        icon: paymentIcon,
        title: "Payment Section",
        desc: "Display payment details with QR codes and bank info."
      },
      {
        icon: ratingIcon,
        title: "Review & Rating",
        desc: "Let customers leave feedback and rate your business out of 5 stars."
      },
      {
        icon: enquiryIcon,
        title: "Enquire Form",
        desc: "Capture leads with an enquiry form and get email notifications."
      },
      {
        icon: visitorIcon,
        title: "Visitor Count",
        desc: "Track how many unique visitors have viewed your digital card."
      },
      {
        icon: spotcardIcon,
        title: "Spot Card",
        desc: "A smart, modern & professional way to network."
      }
    ]
  };


  const paymentContent = {
    upi: ["Paytm", "PhonePe", "Google Pay"],
    upiNumber: "hhsathuli7-2@okaxis",  // Must be proper UPI ID format
    bank: {
      name: "Indian Bank",
      account: "01108010000xxxx5",
      ifsc: "IDIB000PXXX",
    },
  };

  // Gallery Content
  const galleryContent = {
    images: [
      galleryImages,
      galleryImages1,
      galleryImages,
      galleryImages1,
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

    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Spotcard.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`template-bg  pt-3 pb-2 ${theme}`} >
      <div className="v-template1 " id="home">
        <div className={`contain-template ${bckgnd} ${page}`}>
          <div className="container">
            <div className="row">
              {/* Logo */}
              <div className={`logo ${fnts}`}>
                <img
                  src={headerContent.logo.src}
                  alt={headerContent.logo.alt}
                  className="img-fluid"
                  style={headerContent.logo.style}
                />
              </div>

              {/* Headings */}
              <div className="temp-head mt-4">
                <h1 className={`${fnts}`}>{headerContent.headings.main}</h1>
                <h3 className={`${fnts}`}>{headerContent.headings.sub}</h3>
              </div>

              {/* Action Buttons */}
                <div className={`temp-hme btn1 mt-3 ${fnts}`}>
                {headerContent.buttons.map((button, index) => (
                  <div className="btn-a" key={index}>
                    <a
                      href={button.link}
                        className={`navi-a ${fnts}`}
                      target={button.target || ""}
                      rel={button.rel || ""}
                    >
                      {button.text}
                    </a>
                  </div>
                ))}
              </div>

                <div className={`spl-cnt ${fnts} mt-4`}>
                     <p className={`${fnts}`}>{headerContent.splcnt.subpara}</p>
                </div>

              {/* Add to Contact Button */}
              <div className={`share-btn hme-btnn mt-4 ${fnts}`}>
               
                <button
                  type="button"
                  className="sh-qr"
                  onClick={handleAddToContact}
                >
                  Add To Contact
                </button>
              </div>

              {/* Social Icons */}
              <div className={`social-icon mt-5 mb-4 ${fnts}`}>
                {headerContent.socialIcons.map((social, index) => (
                  <a
                    href={social.link}
                    className={social.platform}
                    key={index}
                  >
                    <i>{social.icon}</i>
                  </a>
                ))}
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
      <Menubttm  fnts={fnts}/>
    </div>
  );
};

export default T8;