import React from "react";
import img1 from '../Assest/Images/Icons/credit.png'
import img2 from '../Assest/Images/Icons/rhombus.png'
import img3 from '../Assest/Images/Icons/pin.png'
import img4 from '../Assest/Images/payment.png'


const Payment = () => {
    return (
        <div className="payment pt-3 pb-3">
            <div className="contain-template back-g paym-t1">
                <div className="container">
                    <div className="row">
                        <div className="pay-cmn">
                            <div className='pay-head pb-4'>
                                <h2 className='t1'>Secure Payment <br /> Options</h2>
                            </div>
                            <div className="pay-det ">
                                <div className="pay1 pb-3">
                                    <h6 className="t1 pb-4"><img src={img1} alt="" /> Secure Payment Options </h6>
                                    <h6 className="t1  pb-3"><img src={img2} alt="" /> Payment Via UPI </h6>
                               
                                    <div className='abt-det'>
                                        <p className='label'><img src={img3} alt="" /> Paytm </p>
                                        <p className='value'>+91-xxxxxxxxxx</p>
                                    </div>
                                    <div className='abt-det'>
                                        <p className='label'><img src={img3} alt="" /> PhonePe </p>
                                        <p className='value'>+91-xxxxxxxxxx</p>
                                    </div>
                                    <div className='abt-det'>
                                        <p className='label'><img src={img3} alt="" /> Google Pay </p>
                                        <p className='value'>+91-xxxxxxxxxx</p>
                                    </div>

                                </div>

                                <div className="pay1">
                                    <h6 className="t1  pb-3"><img src={img2} alt="" /> Bank Transfer </h6>
                               
                                    <div className='abt-det'>
                                        <p className='label'><img src={img3} alt="" /> Bank Name </p>
                                        <p className='value'>Indian Bank</p>
                                    </div>
                                    <div className='abt-det'>
                                        <p className='label'><img src={img3} alt="" /> Account Number </p>
                                        <p className='value'>01108010000xxxx5</p>
                                    </div>
                                    <div className='abt-det'>
                                        <p className='label'><img src={img3} alt="" /> IFSC Code </p>
                                        <p className='value'>IDIB000PXXX</p>
                                    </div>

                                </div>

                                <div className="pay-img pt-3">
                                    <img src={img4} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment