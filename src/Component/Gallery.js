import React from "react";

const Gallery = ({ bckgnd, fnts, content }) => {
    return (
        <div className="gallery pt-2 pb-2">
            <div className={`contain-template ${bckgnd} galy-t1`}>
                <div className="container">
                    <div className="row">
                        <div className="gal-cmn">
                            <div className='gal-head pb-3'>
                                <h2 className={`${fnts}`}>Gallery</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {content.images.map((img, index) => (
                            <div className="col-lg-6 col-md-12 col-sm-12" key={index}>
                                <div className="gallry-img pb-3">
                                    <img src={img} className="img-fluid" alt={`Gallery ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;