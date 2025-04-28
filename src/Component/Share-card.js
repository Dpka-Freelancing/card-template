import React from "react";
import img1 from '../Assest/Images/share-qr.png'
const Share = () => {
    return(

        <div className="share pt-3 pb-3">
        <div className="contain-template back-g">
            <div className="container">
                <div className="row">
                    <div className="share-cmn">
                        <div className='share-head pb-3'>
                            <h2 className='t1'>Share Card</h2>
                        </div>
                        <div className="share-url">
                            <div className="url-bx">
                                <p>https://spotcard.in/</p>
                            </div>
                        </div>
                        <div className="share-qr pt-5 pb-5">
                            <p>Scan below QR to open profile</p>
                            <img src={img1} alt="" className="img-fluid" />
                        </div>
                        <div className="share-btn pb-4">
                            <button type="submit" className="sh-qr">Share</button>
                            <button type="submit" className="sve-qr">Save QR</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
   
}
export default Share