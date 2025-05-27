import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import payment icons
import securePaymentIcon from '../Assest/Images/Icons/credit.png';
import paymentMethodIcon from '../Assest/Images/Icons/rhombus.png';
import bulletPointIcon from '../Assest/Images/Icons/pin.png';
import paymentIllustration from '../Assest/Images/payment.png';

const Payment = ({ bckgnd = '', fnts = '', content }) => {
  const [showAppWarning, setShowAppWarning] = useState(false);
  const [currentApp, setCurrentApp] = useState('');
  const [isMobile] = useState(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleUPIClick = (app, upiId) => {
    setCurrentApp(app);
    const payeeName = encodeURIComponent(content.bank.name || 'Merchant');
    const tn = encodeURIComponent('Payment for services');

    // App-specific deep links
    const appLinks = {
      paytm: {
        android: `paytmmp://pay?pa=${upiId}&pn=${payeeName}&tn=${tn}`,
        ios: `paytm://pay?pa=${upiId}&pn=${payeeName}`,
        web: 'https://paytm.com/'
      },
      phonepe: {
        android: `phonepe://pay?pa=${upiId}&pn=${payeeName}`,
        ios: `phonepe://pay?pa=${upiId}`,
        web: 'https://www.phonepe.com/'
      },
      'google pay': {
        android: `tez://upi/pay?pa=${upiId}&pn=${payeeName}`,
        ios: `gpay://upi/pay?pa=${upiId}&pn=${payeeName}`,
        web: 'https://pay.google.com/'
      },
      whatsapp: {
        android: `whatsapp://pay?pa=${upiId}&pn=${payeeName}`,
        ios: `whatsapp://pay?pa=${upiId}&pn=${payeeName}`,
        web: 'https://www.whatsapp.com/'
      },
      default: `upi://pay?pa=${upiId}&pn=${payeeName}&tn=${tn}`
    };

    const platform = isIOS ? 'ios' : 'android';
    const appKey = app.toLowerCase().replace(' ', '');
    let deepLink = appLinks[appKey]?.[platform] || appLinks.default;

    // Special handling for Google Pay on iOS
    if (appKey === 'googlepay' && isIOS) {
      deepLink = appLinks['google pay'].ios;
    }

    // On desktop, show warning immediately
    if (!isMobile) {
      setShowAppWarning(true);
      return;
    }

    // Try to open app
    window.location.href = deepLink;

    // Fallback if app not installed
    const timer = setTimeout(() => {
      if (!document.hidden) {
        if (appKey === 'googlepay' && isIOS) {
          window.location.href = appLinks.whatsapp.ios;
          setTimeout(() => {
            if (!document.hidden) {
              setShowAppWarning(true);
            }
          }, 600);
        } else {
          setShowAppWarning(true);
        }
      }
    }, 600);

    return () => clearTimeout(timer);
  };

  const handleInstallApp = () => {
    const appLinks = {
      paytm: {
        android: 'https://play.google.com/store/apps/details?id=net.one97.paytm',
        ios: 'https://apps.apple.com/in/app/paytm-safe-upi-payments/id473941634'
      },
      phonepe: {
        android: 'https://play.google.com/store/apps/details?id=com.phonepe.app',
        ios: 'https://apps.apple.com/in/app/phonepe-secure-upi-payments/id1170055821'
      },
      'google pay': {
        android: 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user',
        ios: 'https://apps.apple.com/in/app/google-pay-save-pay-manage/id1193357041'
      },
      whatsapp: {
        android: 'https://play.google.com/store/apps/details?id=com.whatsapp',
        ios: 'https://apps.apple.com/in/app/whatsapp-messenger/id310633997'
      }
    };
    
    const appKey = currentApp.toLowerCase().replace(' ', '');
    const storeLink = isIOS ? appLinks[appKey]?.ios : appLinks[appKey]?.android;
    
    if (storeLink) {
      window.open(storeLink, '_blank');
    }
    setShowAppWarning(false);
  };

  return (
    <div className="payment pt-2 pb-2">
      <div className={`contain-template ${bckgnd} paym-t1`}>
        <div className="container">
          <div className="row">
            <div className="pay-cmn">
              {/* App Warning Modal */}
              {showAppWarning && (
                <div className="app-warning-overlay">
                  <div className="app-warning-modal">
                    <h3>{currentApp} {isMobile ? 'Not Installed' : 'Not Available'}</h3>
                    <p>
                      {isMobile 
                        ? `Please install ${currentApp} to make payments directly.` 
                        : `${currentApp} is only available on mobile devices.`}
                    </p>
                    <div className="modal-actions">
                      {isMobile && (
                        <button onClick={handleInstallApp} className="install-button">
                          Install {currentApp}
                        </button>
                      )}
                      <button onClick={() => setShowAppWarning(false)} className="close-button">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className='pay-head pb-4'>
                <h2 className={`${fnts}`}>Secure Payment Options</h2>
              </div>

              <div className="pay-det">
                {/* UPI Payment Section */}
                <div className="pay1 pb-3">
                  <h6 className={`${fnts} pb-4`}>
                    <img src={securePaymentIcon} alt="Secure payment" /> Digital Payments
                  </h6>
                  
                  {/* Display UPI ID prominently before buttons */}
                  <div className="upi-display-section mb-4">
                    <div className="upi-id-display">
                      <h6 className={`${fnts}`}>
                        <img src={paymentMethodIcon} alt="UPI ID" /> UPI ID
                      </h6>
                      <p className="upi-value">{content.upiNumber}</p>
                      {content.phone && (
                        <>
                          <h6 className={`${fnts} mt-3`}>
                            <img src={paymentMethodIcon} alt="Phone number" /> Phone Number
                          </h6>
                          <p className="upi-value">{content.phone}</p>
                        </>
                      )}
                    </div>
                  </div>

                  <h6 className={`${fnts} pb-3`}>
                    <img src={paymentMethodIcon} alt="UPI payment" /> Pay Using UPI Apps
                  </h6>
<div className={`payment-temp ${fnts}`}>
                  {content.upi.map((method, idx) => (
                     
                
                    <div className='abt-det' key={`upi-${idx}`}>
                      <p className='label'>
                        {/* <img src={bulletPointIcon} alt="" />  */}
                        <button
                          onClick={() => handleUPIClick(method, content.upiNumber)}
                          className={`payment-button ${method.toLowerCase().replace(' ', '-')}`}
                          aria-label={`Pay with ${method}`}
                        >
                          {method}
                        </button>
                      </p>
                    </div>
                    
                  ))}
                   </div>
                </div>

                {/* Bank Transfer Section */}
                <div className="pay1">
                  <h6 className={`${fnts} pb-3`}>
                    <img src={paymentMethodIcon} alt="Bank transfer" /> Bank Transfer
                  </h6>
              
                  <div className='abt-det'>
                    <p className='label'><img src={bulletPointIcon} alt="" /> Bank Name</p>
                    <p className='value'>{content.bank.name}</p>
                  </div>
                  <div className='abt-det'>
                    <p className='label'><img src={bulletPointIcon} alt="" /> Account Number</p>
                    <p className='value'>{content.bank.account}</p>
                  </div>
                  <div className='abt-det'>
                    <p className='label'><img src={bulletPointIcon} alt="" /> IFSC Code</p>
                    <p className='value'>{content.bank.ifsc}</p>
                  </div>
                </div>

                {/* Payment Illustration */}
                <div className="pay-img pt-3">
                  <img 
                    src={paymentIllustration} 
                    className="img-fluid" 
                    alt="Payment methods" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
       
        
        .payment-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        
        
        .app-warning-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .app-warning-modal {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          max-width: 90%;
          width: 400px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        
        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 1.5rem;
        }
        
        .install-button {
          background: #0066cc;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .close-button {
          background: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        /* New styles for UPI ID display */
        .upi-display-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid #e9ecef;
        }

        .upi-id-display {
          text-align: center;
        }

        .upi-value {
          font-size: 1.1rem;
          font-weight: 500;
          color: #2c3e50;
          background: white;
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #dee2e6;
          margin-top: 0.5rem;
          word-break: break-all;
        }
      `}</style>
    </div>
  );
};

Payment.propTypes = {
  bckgnd: PropTypes.string,
  fnts: PropTypes.string,
  content: PropTypes.shape({
    upi: PropTypes.arrayOf(PropTypes.string).isRequired,
    upiNumber: PropTypes.string.isRequired,
    phone: PropTypes.string, // Added phone number prop
    bank: PropTypes.shape({
      name: PropTypes.string.isRequired,
      account: PropTypes.string.isRequired,
      ifsc: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Payment;