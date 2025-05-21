import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const Feedback = ({ bckgnd,fnts }) => {
    const [rating, setRating] = useState(0); // State to store selected rating

    return (
        <div className="feedback pt-2 pb-2">
            <div className={`contain-template ${bckgnd}  fedb-t1 bg `}>
                <div className="container">
                    <div className="row">
                        <div className="feed-cmn pb-5">
                            <div className='feed-head pb-3'>
                                <h2 className={`${fnts}`}>FeedBack</h2>
                            </div>
                            <div className="feed-form">
                                <div className="feed-head">
                                    <h6 className={`${fnts}`}>Share your Thoughts</h6>
                                </div>
                                <div className="feed-form1">
                                    <h6 className={`${fnts}`}>Give Star</h6>
                                    <div className="star">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                onClick={() => setRating(star)}
                                                style={{ cursor: "pointer", color: star <= rating ? "#FFB700" : "white" }}
                                            />
                                        ))}
                                    </div>
                                    <form className="form-des" >
                                        <div className="row">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <button type="submit" className="ylw-btn">Submit</button>
                                        </div>
                                    </form>
                                    <div className="heart-icon">
                                        <FaHeart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feed-cmn pt-5" id="efrm">
                            <div className='feed-head pb-3'>
                                <h2 className={`${fnts}`}>Enquire Form</h2>
                            </div>
                            <div className="feed-form">
                                <div className="feed-head">
                                    <h6 className={`${fnts} mb-2` }>Share your Thoughts</h6>
                                </div>
                                <div className="feed-form1">
                                    <form className="form-des">
                                        <div className="row">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <input
                                                type="text"
                                                name="business"
                                                placeholder="Business Name"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                            />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <button type="submit" className="ylw-btn">Submit</button>
                                        </div>
                                    </form>
                                    <div className="heart-icon">
                                        <FaHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
