import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTimes } from 'react-icons/fa';
import img1 from '../Assest/Images/share-qr.png'





const Share = () => {
    const [showPopup, setShowPopup] = useState(false);
    const shareUrl = window.location.href;
    const encodedUrl = encodeURIComponent(shareUrl);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => console.error('Copy failed:', err));
    };

    return (
        <div className="share pt-3 pb-3">
            <div className="contain-template back-g shar-t1">
                <div className="container">
                    <div className="row">
                        <div className="share-cmn">
                            <div className='share-head pb-3'>
                                <h2 className='t1'>Share Card</h2>
                            </div>
                            <div className="share-url">
                                <div className="url-bx">
                                    <p>{shareUrl}</p>
                                </div>
                            </div>
                            <div className="share-qr pt-5 pb-5">
                                <p>Scan below QR to open profile</p>
                                <img src={img1} alt="QR Code" className="img-fluid" />
                            </div>
                            <div className="share-btn pb-4">
                                <button type="button" className="sh-qr" onClick={() => setShowPopup(true)}>
                                    Share
                                </button>
                                <button type="button" className="sve-qr">Save QR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Popup */}
            {showPopup && (
                <div className="popup-backdrop">
                    <div className="popup-content">
                        <button className="close-btn" onClick={() => setShowPopup(false)}>
                            <FaTimes />
                        </button>
                        <h3>Share via</h3>
                        <div className="social-icons">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                               target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="icon facebook" />
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
                               target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="icon twitter" />
                            </a>
                            <a href={`https://wa.me/?text=${encodedUrl}`}
                               target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="icon whatsapp" />
                            </a>
                        </div>
                        <p>or</p>
                        <input type="text" value={shareUrl} readOnly />
                        <button onClick={copyToClipboard}>Copy Link</button>
                    </div>
                </div>
            )}
        </div>
    );
};



export default Share