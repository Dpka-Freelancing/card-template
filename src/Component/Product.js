import React from "react";
import chat from "../Assest/Images/Icons/chat.png"
import img1 from "../Assest/Images/Icons/confetti.png"
import img2 from "../Assest/Images/Icons/smile.png"
import img3 from "../Assest/Images/Icons/startup.png"
import img4 from "../Assest/Images/Icons/star.png"
import img5 from "../Assest/Images/Icons/check.png"
import img6 from "../Assest/Images/Icons/pin.png"
import img7 from "../Assest/Images/Icons/flame.png"
import img8 from "../Assest/Images/Rectangle 24.png"

const Product = () => {
    return (
        <div className="product pt-2 pb-2">
            <div className="contain-template back-g prod-t1">
                <div className="container">
                    <div className="row">
                        <div className="prod-cmn">
                            <div className='prod-head pb-3'>
                                <h2 className='t1'>Product / Service</h2>
                            </div>
                            <div className="prod-det">
                                <p className="strong"><img src={chat} alt="" />Digital Visiting Card + Daily Greetings Images <img src={img1} alt="" /></p>
                                <p className="pt-4 pb-4"><img src={img2} alt="" /> No matter what business you do, share all your business details, products, and services easily with your customers through a SpotCard Digital Visiting Card! <img src={img3} alt="" /></p>
                            </div>
                            <div className="kfeature">
                                <h6 className='t1'> <img src={img4} alt="" /> Key Feature : </h6>
                                <ul>
                                    <li> <img src={img5} alt="" /> Share your business details instantly with just one click</li>
                                    <li> <img src={img5} alt="" /> Add website links, social media, and payment options</li>
                                    <li> <img src={img5} alt="" />QR code-enabled for quick and easy sharing</li>
                                    <li> <img src={img5} alt="" /> Affordable, eco-friendly, and always accessible</li>
                                </ul>
                            </div>
                            <div className="prod-det">
                                <p className="strong"><img src={img6} alt="" /> Create your SpotCard today & grow your business effortlessly! <img src={img7} alt="" /></p>
                            </div>
                            <div className="prod-img">
                                <img src={img8} alt="" class="img-fluid"  />
                                <div className="enq-sec mt-5">
                                   <h5 className="t1">Talk with our team</h5>
                                   <a href="/feedback#efrm" className="enq-btn" type="submit">Enquire</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product