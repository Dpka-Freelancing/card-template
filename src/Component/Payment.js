import React from "react";
import img1 from '../Assest/Images/Icons/credit.png';
import img2 from '../Assest/Images/Icons/rhombus.png';
import img3 from '../Assest/Images/Icons/pin.png';
import img4 from '../Assest/Images/payment.png';

// Payment data sets per font/theme key
const paymentData = {
  t1: {
    upi: ["Paytm", "PhonePe", "Google Pay"],
    upiNumber: "+91-xxxxxxxxxx",
    bank: {
      name: "Indian Bank",
      account: "01108010000xxxx5",
      ifsc: "IDIB000PXXX"
    }
  },
  t2: {
    upi: ["Paytm", "PhonePe", "Google Pay"],
    upiNumber: "+91-9876543210",
    bank: {
      name: "State Bank of India",
      account: "20305500000yyyy7",
      ifsc: "SBIN000ZZZ"
    }
  },
  // Add more themes (t3, etc.) as needed
};

const Payment = ({ bckgnd, fnts }) => {
  const data = paymentData[fnts] || paymentData['t1']; // Fallback to t1

  return (
    <div className="payment pt-2 pb-2">
      <div className={`contain-template ${bckgnd} paym-t1`}>
        <div className="container">
          <div className="row">
            <div className="pay-cmn">
              <div className='pay-head pb-4'>
                <h2 className={`${fnts}`}>Secure Payment <br /> Options</h2>
              </div>

              <div className="pay-det">
                <div className="pay1 pb-3">
                  <h6 className={`${fnts} pb-4`}><img src={img1} alt="" /> Secure Payment Options</h6>
                  <h6 className={`${fnts} pb-3`}><img src={img2} alt="" /> Payment Via UPI</h6>

                  {data.upi.map((method, idx) => (
                    <div className='abt-det' key={idx}>
                      <p className='label'><img src={img3} alt="" /> {method}</p>
                      <p className='value'>{data.upiNumber}</p>
                    </div>
                  ))}
                </div>

                <div className="pay1">
                  <h6 className={`${fnts} pb-3`}><img src={img2} alt="" /> Bank Transfer</h6>
                  <div className='abt-det'>
                    <p className='label'><img src={img3} alt="" /> Bank Name</p>
                    <p className='value'>{data.bank.name}</p>
                  </div>
                  <div className='abt-det'>
                    <p className='label'><img src={img3} alt="" /> Account Number</p>
                    <p className='value'>{data.bank.account}</p>
                  </div>
                  <div className='abt-det'>
                    <p className='label'><img src={img3} alt="" /> IFSC Code</p>
                    <p className='value'>{data.bank.ifsc}</p>
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
  );
};

export default Payment;
