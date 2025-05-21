import React from "react";
import img1 from '../Assest/Images/gal-1.png';
import img2 from '../Assest/Images/gal-2.png';
import img3 from '../Assest/Images/gal-3.png';
import img4 from '../Assest/Images/gal-4.png';

// Gallery image sets
const galleryImages = {
  t1: [img2, img2, img2, img2, img2],
  t2: [img3, img3, img3, img3, img3],
 
  // Add more sets as needed
};

const Gallery = ({ bckgnd, fnts }) => {
  const images = galleryImages[fnts] || galleryImages['t1']; // Default fallback to t1

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
            {images.map((img, index) => (
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
