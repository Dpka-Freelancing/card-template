import React, { useState } from "react";

const Gallery = ({ bckgnd, fnts, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery pt-2 pb-2">
      <div className={`contain-template ${bckgnd} galy-t1`}>
        <div className="container">
          <div className="row">
            <div className="gal-cmn">
              <div className="gal-head pb-3">
                <h2 className={`${fnts}`}>Gallery</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {content.images.map((img, index) => (
              <div className="col-lg-6 col-md-6 col-sm-6 mble-2clm" key={index}>
                <div className="gal-hgt">
                   <div
                  className="gallry-img mb-3"
                  onClick={() => openModal(img)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={img}
                    className="img-fluid dot"
                    alt={`Gallery ${index + 1}`}
                  />

                  <div className="image-overlay"></div>
                  <div className="magnify-icon">🔍</div>

                
                </div>
                </div>

               

                <div className={`gal-btn ${fnts}`}>
                  <button
                    className={`gallery-btn ${fnts}`}
                    
                  >
                    Get This Product
                  </button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                background: "white",
                color: "black",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Enlarged view"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
