import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const Feedback = () => {
    return (
        <div className="feedback pt-3 pb-3">
            <div className="contain-template back-g">
                <div className="container">
                    <div className="row">
                        <div className="feed-cmn pb-5">
                            <div className='feed-head pb-3'>
                                <h2 className='t1'>FeedBack</h2>
                            </div>
                            <div className="feed-form">
                                
                                    <div className="feed-head">
                                        <h6 className="t1">Share your Throughts </h6>
                                    </div>
                                    <div className="feed-form1">
                                        <h6 className="t1">Give Star </h6>
                                        <div className="star">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        </div>
                                        <form className="form-des" >
                                            <div className="row">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Name"
                                                    
                                                />
                                            </div>
                                            <br/>

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

                        <div className="feed-cmn pt-5">
                            <div className='feed-head pb-3'>
                                <h1 className='t1'>Enquire Form</h1>
                            </div>
                            <div className="feed-form">
                                
                                    <div className="feed-head">
                                        <h6 className="t1 mb-2">Share your Throughts </h6>
                                    </div>
                                    <div className="feed-form1 ">
                                       
                                        <form className="form-des pt-3" >
                                            <div className="row">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Name"
                                                    
                                                />
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <input
                                                    type="text"
                                                    name=""
                                                    placeholder="Business Name"
                                                    
                                                />
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <input
                                                    type="text"
                                                    name=""
                                                    placeholder="Email Address"
                                                    
                                                />
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <input
                                                    type="text"
                                                    name=""
                                                    placeholder="Phone Number"
                                                    
                                                />
                                            </div>
                                            <br/>
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
    )
}
export default Feedback