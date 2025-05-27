import React from "react";
import chat from "../Assest/Images/Icons/chat.png";
import img1 from "../Assest/Images/Icons/confetti.png";
import img2 from "../Assest/Images/Icons/smile.png";
import img3 from "../Assest/Images/Icons/startup.png";
import img4 from "../Assest/Images/Icons/star.png";
import img5 from "../Assest/Images/Icons/check.png";
import img6 from "../Assest/Images/Icons/pin.png";
import img7 from "../Assest/Images/Icons/flame.png";

const Product = ({ bckgnd, fnts, content }) => {
    return (
        <div className="product pt-2 pb-2">
            <div className={`contain-template ${bckgnd} prod-t1`}>
                <div className="container">
                    <div className="row">
                        <div className="prod-cmn">
                            <div className="prod-head pb-3">
                                <h2 className={fnts}>{content.heading}</h2>
                            </div>
                            <div className="prod-det">
                                <p className="strong">
                                    <img src={chat} alt="" /> {content.highlight} <img src={img1} alt="" />
                                </p>
                                <p className="pt-4 pb-4">
                                    <img src={img2} alt="" /> {content.description} <img src={img3} alt="" />
                                </p>
                            </div>
                            <div className="kfeature">
                                <h6 className={fnts}>
                                    <img src={img4} alt="" /> Key Feature :
                                </h6>
                                <ul>
                                    {content.keyFeatures.map((feature, idx) => (
                                        <li key={idx} className={fnts}>
                                            <img src={img5} alt="" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="prod-det">
                                <p className="strong">
                                    <img src={img6} alt="" /> {content.callToAction} <img src={img7} alt="" />
                                </p>
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
        </div>
    );
};

export default Product;