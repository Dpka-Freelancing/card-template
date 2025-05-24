import React, { useState, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';

const Share = ({ bckgnd, fnts, content }) => {
    const [showPopup, setShowPopup] = useState(false);
    const shareUrl = window.location.href;
    const encodedUrl = encodeURIComponent(shareUrl);
    const qrRef = useRef();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => console.error('Copy failed:', err));
    };

    const downloadQR = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qr-code.png';
        a.click();
    };

    return (
        <div className="share pt-2 pb-2">
            <div className={`contain-template ${bckgnd} shar-t1`}>
                <div className="container">
                    <div className="row">
                        <div className="share-cmn">
                            <div className='share-head pb-3'>
                                <h2 className={`${fnts}`}>Share Card</h2>
                            </div>
                            <div className="share-url">
                                <div className="url-bx">
                                    <p>{shareUrl}</p>
                                </div>
                            </div>
                            <div className="share-qr pt-5 pb-5">
                                <p>Scan below QR to open profile</p>
                                <div ref={qrRef}>
                                    <QRCodeCanvas value={shareUrl} size={200} includeMargin={true} />
                                </div>
                            </div>
                            <div className={`share-btn ${fnts} pb-4`}>
                                <button type="button" className="sh-qr" onClick={() => setShowPopup(true)}>
                                    Share
                                </button>
                                <button type="button" className="sve-qr" onClick={downloadQR}>
                                    Save QR
                                </button>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                src={content.mapUrl}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
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
                            <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(content.shareText)}`}
                                target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="icon twitter" />
                            </a>
                            <a href={`https://wa.me/?text=${encodeURIComponent(content.shareText + ' ' + shareUrl)}`}
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

export default Share;