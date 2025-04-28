import React from "react";
import img1 from '../Assest/Images/gal-1.png'
import img2 from '../Assest/Images/gal-2.png'
import img3 from '../Assest/Images/gal-3.png'
import img4 from '../Assest/Images/gal-4.png'



const Gallery = () => {
    return (
        <div className="gallery pt-3 pb-3">
            <div className="contain-template back-g">
                <div className="container">
                    <div className="row">
                        <div className="gal-cmn">
                            <div className='gal-head pb-3'>
                                <h2 className='t1'>Gallery</h2>
                            </div>
                            <div className="gallery-img">
                                <div class="gallery-item wide"><img src={img1} alt="" className="img-fluid"/></div>

                                <div class="gallery-item"><img src={img2} alt=""className="img-fluid" /></div>
                                <div class="gallery-item"><img src={img3} alt="" className="img-fluid" /></div>

                                <div class="gallery-item tall"><img src={img4} alt="" className="img-fluid" /></div>
                                <div class="gallery-item"><img src={img3} alt="" className="img-fluid" /></div>

                                <div class="gallery-item tall"><img src={img4} alt="" className="img-fluid" /></div>
                                <div class="gallery-item"><img src={img3} alt="" className="img-fluid" /></div>
                               
                                <div class="gallery-item wide"><img src={img1} alt="" className="img-fluid"/></div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery