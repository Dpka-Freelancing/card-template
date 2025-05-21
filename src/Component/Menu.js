import React from "react";
import { FaHome, FaInfoCircle, FaShare } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdFeaturedPlayList, MdPayments } from "react-icons/md";
import { RiGalleryFill, RiFeedbackFill } from "react-icons/ri";

const Menubttm = ({fnts}) => {
    return (
        <div className="Menu-card">
            <div className={`contain-template bottom-menu ${fnts}`}>
                <div className="container">
                    <div className="row">
                        <div className="m-icons">
                            <a href="#home" className="icon-m"><i><FaHome /></i></a>
                            <a href="#about" className="icon-m"><i><FaInfoCircle /></i></a>
                            <a href="#product" className="icon-m"><i><AiFillProduct /></i></a>
                            {/* <a href="" className="icon-m"><i><MdFeaturedPlayList /></i></a> */}
                            <a href="#payment" className="icon-m"><i><MdPayments /></i></a>
                            <a href="#gallery" className="icon-m"><i><RiGalleryFill /></i></a>
                            {/* <a href="" className="icon-m"><i><RiFeedbackFill /></i></a> */}
                            <a href="#share" className="icon-m"><i><FaShare /></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menubttm