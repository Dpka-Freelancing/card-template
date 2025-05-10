import React from "react";
import img1 from '../Assest/Images/gal-1.png'
import img2 from '../Assest/Images/gal-2.png'
import img3 from '../Assest/Images/gal-3.png'
import img4 from '../Assest/Images/gal-4.png'



const Gallery = () => {
    return (
        <div className="gallery pt-3 pb-3">
            <div className="contain-template back-g galy-t1">
                <div className="container">
                    <div className="row">

                        <div className="gal-cmn">
                            <div className='gal-head pb-3'>
                                <h2 className='t1'>Gallery</h2>
                            </div>



                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="gallry-img pb-3">
                                <img src={img2} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="gallry-img pb-3">
                                <img src={img2} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="gallry-img pb-3">
                                <img src={img2} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="gallry-img pb-3">
                                <img src={img2} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="gallry-img pb-3">
                                <img src={img2} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery