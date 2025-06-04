import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Feedback = ({ bckgnd, fnts }) => {
    // State for feedback form
    const [rating, setRating] = useState(0);
    const [feedbackForm, setFeedbackForm] = useState({
        username: '',
        message: ''
    });
    
    // State for enquiry form
    const [enquireForm, setEnquireForm] = useState({
        username: '',
        business: '',
        email: '',
        phone: '',
        message: ''
    });
    
    // Submission status and loading states
    const [submissionStatus, setSubmissionStatus] = useState({
        feedback: null,
        enquire: null
    });
    const [isLoading, setIsLoading] = useState({
        feedback: false,
        enquire: false
    });

    // EmailJS credentials
    const SERVICE_ID = 'service_4hqlfa9';
    const TEMPLATE_ID_FEEDBACK = 'template_vrbmphs';
    const TEMPLATE_ID_ENQUIRE = 'template_ktwgaic';
    const PUBLIC_KEY = 'g5fbS22f5lMcdpvt6';

    // Handle form changes
    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedbackForm(prev => ({ ...prev, [name]: value }));
    };

    const handleEnquireChange = (e) => {
        const { name, value } = e.target;
        setEnquireForm(prev => ({ ...prev, [name]: value }));
    };

    // Submit feedback form
    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        setIsLoading({...isLoading, feedback: true});
        setSubmissionStatus({...submissionStatus, feedback: null});
        
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_FEEDBACK,
                {
                    from_name: feedbackForm.username,
                    message: feedbackForm.message,
                    rating: rating,
                    reply_to: 'noreply@example.com'
                },
                { publicKey: PUBLIC_KEY }
            );

            setSubmissionStatus({...submissionStatus, feedback: 'success'});
            setFeedbackForm({ username: '', message: '' });
            setRating(0);
        } catch (error) {
            console.error('Feedback submission failed:', error);
            setSubmissionStatus({...submissionStatus, feedback: 'error'});
        } finally {
            setIsLoading({...isLoading, feedback: false});
        }
    };

    // Submit enquiry form
const handleEnquireSubmit = async (e) => {
    e.preventDefault();
    setIsLoading({...isLoading, enquire: true});
    setSubmissionStatus({...submissionStatus, enquire: null});
    
    try {
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID_ENQUIRE,
            {
                from_name: enquireForm.username,
                business_name: enquireForm.business || 'Not provided', // Fallback if empty
                from_email: enquireForm.email || 'Not provided', // Fallback if empty
                phone: enquireForm.phone,
                message: enquireForm.message,
                reply_to: enquireForm.email || 'noreply@example.com' // Fallback email
            },
            { publicKey: PUBLIC_KEY }
        );

        setSubmissionStatus({...submissionStatus, enquire: 'success'});
        setEnquireForm({
            username: '',
            business: '',
            email: '',
            phone: '',
            message: ''
        });
    } catch (error) {
        console.error('Enquiry submission failed:', error);
        setSubmissionStatus({...submissionStatus, enquire: 'error'});
    } finally {
        setIsLoading({...isLoading, enquire: false});
    }
};

    return (
        <div className="feedback pt-2 pb-2">
            <div className={`contain-template ${bckgnd} fedb-t1 bg`}>
                <div className="container">
                    <div className="row">
                        {/* Feedback Section */}
                        <div className="feed-cmn pb-5">
                            <div className='feed-head pb-3'>
                                <h2 className={`${fnts}`}>Feedback</h2>
                            </div>
                            <div className="feed-form">
                                <div className="feed-head">
                                    <h6 className={`${fnts}`}>Share your Thoughts</h6>
                                </div>
                                <div className="feed-form1">
                                    <h6 className={`${fnts}`}>Rate Us</h6>
                                    <div className="star">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                onClick={() => setRating(star)}
                                                style={{ 
                                                    cursor: "pointer", 
                                                    color: star <= rating ? "#FFB700" : "#ddd",
                                                    fontSize: "24px",
                                                    margin: "0 2px"
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <form className="form-des" onSubmit={handleFeedbackSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Your Name"
                                                value={feedbackForm.username}
                                                onChange={handleFeedbackChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Your Feedback"
                                                value={feedbackForm.message}
                                                onChange={handleFeedbackChange}
                                                required
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className={`ylw-btn ${fnts}`}
                                            disabled={isLoading.feedback}
                                        >
                                            {isLoading.feedback ? 'Sending...' : 
                                             submissionStatus.feedback === 'success' ? 'Thank You!' : 
                                             submissionStatus.feedback === 'error' ? 'Try Again' : 'Submit Feedback'}
                                        </button>
                                        {submissionStatus.feedback === 'success' && (
                                            <p className="success-message">Your feedback has been submitted!</p>
                                        )}
                                        {submissionStatus.feedback === 'error' && (
                                            <p className="error-message">Submission failed. Please try again.</p>
                                        )}
                                    </form>
                                    <div className="heart-icon">
                                        <FaHeart color="#FFB700" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enquiry Section */}
                        <div className="feed-cmn pt-5" id="efrm">
                            <div className='feed-head pb-3'>
                                <h2 className={`${fnts}`}>Contact Us</h2>
                            </div>
                            <div className="feed-form">
                                <div className="feed-head">
                                    <h6 className={`${fnts} mb-2`}>Get in Touch</h6>
                                </div>
                                <div className="feed-form1">
                                    <form className="form-des" onSubmit={handleEnquireSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Your Name"
                                                value={enquireForm.username}
                                                onChange={handleEnquireChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="business"
                                                placeholder="Business Name (Optional)"
                                                value={enquireForm.business}
                                                onChange={handleEnquireChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={enquireForm.email}
                                                onChange={handleEnquireChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number (Optional)"
                                                value={enquireForm.phone}
                                                onChange={handleEnquireChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                value={enquireForm.message}
                                                onChange={handleEnquireChange}
                                                required
                                            />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className={`ylw-btn ${fnts}`}
                                            disabled={isLoading.enquire}
                                        >
                                            {isLoading.enquire ? 'Sending...' : 
                                             submissionStatus.enquire === 'success' ? 'Thank You!' : 
                                             submissionStatus.enquire === 'error' ? 'Try Again' : 'Send Message'}
                                        </button>
                                        {submissionStatus.enquire === 'success' && (
                                            <p className="success-message">Your message has been sent!</p>
                                        )}
                                        {submissionStatus.enquire === 'error' && (
                                            <p className="error-message">Failed to send. Please try again.</p>
                                        )}
                                    </form>
                                    <div className="heart-icon">
                                        <FaHeart color="#FFB700" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .feedback {
                    font-family: Arial, sans-serif;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                input, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                }
                textarea {
                    min-height: 120px;
                    resize: vertical;
                }
                .ylw-btn {
                    background-color: #FFB700;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 600;
                    transition: all 0.3s;
                    width: 100%;
                }
                .ylw-btn:hover:not(:disabled) {
                    background-color: #e6a500;
                    transform: translateY(-2px);
                }
                .ylw-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                .success-message {
                    color: #28a745;
                    margin-top: 10px;
                    text-align: center;
                    font-size: 14px;
                }
                .error-message {
                    color: #dc3545;
                    margin-top: 10px;
                    text-align: center;
                    font-size: 14px;
                }
                .star {
                    display: flex;
                    justify-content: center;
                    margin: 15px 0;
                }
                .heart-icon {
                    text-align: center;
                    margin: 25px 0 10px;
                }
                @media (max-width: 768px) {
                    .feed-cmn {
                        padding-bottom: 20px !important;
                    }
                    input, textarea {
                        padding: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Feedback;