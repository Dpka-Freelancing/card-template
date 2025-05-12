import React from "react";
import img1 from '../Assest/Images/Icons/startup.png'
import img2 from '../Assest/Images/Icons/call.png'
import img3 from '../Assest/Images/Icons/messenger.png'
import img4 from '../Assest/Images/Icons/mail.png'
import img5 from '../Assest/Images/Icons/pin1.png'
import img6 from '../Assest/Images/Icons/hand-graving-smartphone.png'
import img7 from '../Assest/Images/Icons/world-wide-web.png'
import img8 from '../Assest/Images/Icons/loading-arrow.png'
import img9 from '../Assest/Images/Icons/online-shopping.png'
import img10 from '../Assest/Images/Icons/gallery.png'
import img11 from '../Assest/Images/Icons/youtube.png'
import img12 from '../Assest/Images/Icons/salary.png'
import img13 from '../Assest/Images/Icons/rating.png'
import img14 from '../Assest/Images/Icons/audience.png'
import img15 from '../Assest/Images/Icons/pin.png'
import img16 from '../Assest/Images/Icons/updated.png'
import img17 from '../Assest/Images/Icons/email.png'
import img18 from '../Assest/Images/Rectangle 24.png'



const Feature = () => {
    return (
        <div className="feature pt-2 pb-2">
            <div className="contain-template back-g featu-t1">
                <div className="container">
                    <div className="row">
                        <div className="fea-cmn pb-4">
                            <h6 className="t1">SpotCard Digital Vcard Features <img src={img1} alt="" /></h6>
                        </div>
                        <div className="fea-det">
                            <div className="fea1">
                                <p className="strong"><img src={img2} alt="" /> Click to Call </p>
                                <p>Customers can call you instantly by tapping your phone number.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img3} alt="" /> Click to WhatsApp </p>
                                <p>Customers can WhatsApp you without saving your number.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img4} alt="" />  Click to Email </p>
                                <p>One-click email feature for easy communication.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img5} alt="" /> Click to Navigate </p>
                                <p>Let customers find your location easily using Google Maps.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img6} alt="" /> Add to Contacts </p>
                                <p>Customers can save all your details directly to their phone.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img7} alt="" /> Website & Social Links </p>
                                <p>Direct access to your website and social media with a single click.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img8} alt="" /> Share Unlimited </p>
                                <p>Share your digital business card as many times as you want.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img16} alt="" /> Easy To Update </p>
                                <p>Update your details anytime, as often as needed.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img9} alt="" /> Product Catalogue </p>
                                <p>Showcase up to 15 featured products/services with images and descriptions.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img10} alt="" /> Photo Gallery </p>
                                <p>Display up to 20 business-related images for better engagement.</p>
                            </div>

                            <div className="fea1">
                                <p className="strong"><img src={img11} alt="" /> YouTube Video Gallery </p>
                                <p>Enhance customer experience with business-related YouTube videos.</p>
                            </div>

                            <div className="fea1">
                                <p className="strong"><img src={img12} alt="" /> Payment Section </p>
                                <p>Display payment details, including Paytm, PhonePe, Google Pay, and bank details with QR codes</p>
                            </div>

                            <div className="fea1">
                                <p className="strong"><img src={img13} alt="" /> Review & Rating </p>
                                <p>Let customers leave feedback and rate your business out of 5 star.</p>
                            </div>

                            <div className="fea1">
                                <p className="strong"><img src={img17} alt="" /> Enquire Form </p>
                                <p>Cature lead with an enquire form and get email notifications.</p>
                            </div>

                            <div className="fea1">
                                <p className="strong"><img src={img14} alt="" /> Visitor Count </p>
                                <p>Track how many unique Visitor have viewed your digital card.</p>
                            </div>
                            <div className="fea1">
                                <p className="strong"><img src={img15} alt="" /> Spot Card </p>
                                <p>A smart, mordern & Professional way to network</p>
                            </div>
                        </div>
                        <div className="prod-img">
                                <img src={img18} alt="" class="img-fluid"  />
                                <div className="enq-sec mt-5">
                                   <h5 className="t1">Talk with our team</h5>
                                   <a href="/feedback#efrm" className="enq-btn" type="submit">Enquire</a>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature