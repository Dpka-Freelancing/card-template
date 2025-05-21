import React from "react";

// Image Imports
import img1 from "../Assest/Images/Icons/startup.png";
import img2 from "../Assest/Images/Icons/call.png";
import img3 from "../Assest/Images/Icons/messenger.png";
import img4 from "../Assest/Images/Icons/mail.png";
import img5 from "../Assest/Images/Icons/pin1.png";
import img6 from "../Assest/Images/Icons/hand-graving-smartphone.png";
import img7 from "../Assest/Images/Icons/world-wide-web.png";
import img8 from "../Assest/Images/Icons/loading-arrow.png";
import img9 from "../Assest/Images/Icons/online-shopping.png";
import img10 from "../Assest/Images/Icons/gallery.png";
import img11 from "../Assest/Images/Icons/youtube.png";
import img12 from "../Assest/Images/Icons/salary.png";
import img13 from "../Assest/Images/Icons/rating.png";
import img14 from "../Assest/Images/Icons/audience.png";
import img15 from "../Assest/Images/Icons/pin.png";
import img16 from "../Assest/Images/Icons/updated.png";
import img17 from "../Assest/Images/Icons/email.png";
import img18 from "../Assest/Images/Rectangle 24.png";
import img19 from "../Assest/Images/t2/puppy.png"; // optional alternate image

// Theme Configurations
const featureContent = {
  t1: {
    heading: "SpotCard Digital Vcard Features",
    icon: img1,
    features: [
      { icon: img2, title: "Click to Call", desc: "Customers can call you instantly by tapping your phone number." },
      { icon: img3, title: "Click to WhatsApp", desc: "Customers can WhatsApp you without saving your number." },
      { icon: img4, title: "Click to Email", desc: "One-click email feature for easy communication." },
      { icon: img5, title: "Click to Navigate", desc: "Let customers find your location easily using Google Maps." },
      { icon: img6, title: "Add to Contacts", desc: "Customers can save all your details directly to their phone." },
      { icon: img7, title: "Website & Social Links", desc: "Direct access to your website and social media with a single click." },
      { icon: img8, title: "Share Unlimited", desc: "Share your digital business card as many times as you want." },
      { icon: img16, title: "Easy To Update", desc: "Update your details anytime, as often as needed." },
      { icon: img9, title: "Product Catalogue", desc: "Showcase up to 15 featured products/services with images and descriptions." },
      { icon: img10, title: "Photo Gallery", desc: "Display up to 20 business-related images for better engagement." },
      { icon: img11, title: "YouTube Video Gallery", desc: "Enhance customer experience with business-related YouTube videos." },
      { icon: img12, title: "Payment Section", desc: "Display payment details with QR codes and bank info." },
      { icon: img13, title: "Review & Rating", desc: "Let customers leave feedback and rate your business out of 5 stars." },
      { icon: img17, title: "Enquire Form", desc: "Capture leads with an enquiry form and get email notifications." },
      { icon: img14, title: "Visitor Count", desc: "Track how many unique visitors have viewed your digital card." },
      { icon: img15, title: "Spot Card", desc: "A smart, modern & professional way to network." },
    ],
    image: img18,
    ctaHeading: "Talk with our team",
    ctaButtonText: "Enquire",
    ctaLink: "/feedback#efrm",
  },

  t2: {
    heading: "Pets World – Your One-Stop Pet Shop!",
    icon: img1,
    features: [
      { icon: img2, title: "Expert Pet Guidance", desc: "Get professional advice on pet care, nutrition, and training." },
      { icon: img3, title: "Wide Range of Pet Products", desc: "Find top-quality pet food, toys, accessories, and healthcare essentials." },
      { icon: img4, title: "Live Pets Available", desc: "Adopt adorable puppies, kittens, birds, fish, and more!" },
      { icon: img5, title: "Hassle-Free Shopping", desc: "Easy ordering, secure payments, and doorstep delivery." },
      { icon: img6, title: "Exciting Offers & Discounts", desc: "Enjoy seasonal deals and exclusive member benefits." },
      { icon: img7, title: "Customer Reviews & Ratings", desc: "See what fellow pet lovers say about our products and services." },
      { icon: img9, title: "Personalized Recommendations", desc: "We help you choose the best products for your pet’s unique needs." },
      { icon: img13, title: "Customer Reviews", desc: "Read what our pet parents say." },
    ],
    image: img19,
    ctaHeading: "Call Shop",
    ctaButtonText: "Enquiry",
    ctaLink: "/contact",
  },
};

const Feature = ({ bckgnd, fnts }) => {
  const content = featureContent[fnts] || featureContent.t1;

  return (
    <div className="feature pt-2 pb-2">
      <div className={`contain-template ${bckgnd} featu-t1`}>
        <div className="container">
          <div className="row">
            <div className="fea-cmn pb-4">
              <h6 className={fnts}>
                {content.heading} <img src={content.icon} alt="" />
              </h6>
            </div>

            <div className="fea-det">
              {content.features.map((item, idx) => (
                <div className="fea1" key={idx}>
                  <p className="strong">
                    <img src={item.icon} alt="" /> {item.title}
                  </p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="prod-img">
              <img src={content.image} alt="" className="img-fluid" />
              <div className="enq-sec mt-5">
                <h5 className={fnts}>{content.ctaHeading}</h5>
                <a href={content.ctaLink} className="enq-btn" type="submit">
                  {content.ctaButtonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
