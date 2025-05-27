import React, { useState } from 'react';
import videothumbnail from "../Assest/Images/thumbnail.jpg"

const VideoGallery = ({ bckgnd, fnts, videoThumbnail, videoId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="video-gallery pt-2 pb-2">
      <div className={`contain-template ${bckgnd} ${fnts} galy-t1`}>
        <div className="container">
          <div className="row">
            <div className="gal-cmn">
              <div className="gal-head pb-3">
                <h2 className={fnts}> Video Gallery</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div
                className="gallry-img video mb-3"
                onClick={openModal}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <img
                  src={videothumbnail}
                  className="img-fluid"
                  alt="Video Thumbnail"
                />
                <div className="image-overlay"></div>
                <div className="magnify-icon">▶</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
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
            style={{ position: "relative", width: "80%", maxWidth: "800px", height: "450px" }}
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
                zIndex: 10,
              }}
              aria-label="Close"
            >
              &times;
            </button>

            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
