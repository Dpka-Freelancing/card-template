import React, { useState } from 'react';

// Review data per theme/font type
const reviewSets = {
  t1: [
    { name: "Nisar Sulthan", date: "November 8, 2024", stars: 5, review: "Excellent service! Highly recommend. The team was very professional and delivered on time." },
    { name: "Mohammed Bakkar", date: "October 25, 2024", stars: 4, review: "Great experience overall. The product quality was good, but there was a slight delay in delivery." },
    { name: "Sathu Lee", date: "September 30, 2024", stars: 3, review: "Average experience. The service was decent but not exceptional." },
    { name: "Selvaraj", date: "August 15, 2024", stars: 5, review: "Fantastic! Couldn’t have asked for a better experience. Will use their services again." },
    { name: "Vasanth", date: "April 15, 2024", stars: 3, review: "It was okay. Some parts of the service were good, others not so much." },
    { name: "Mohammad Fahad", date: "March 30, 2024", stars: 4, review: "Very good service, but a bit expensive." },
    { name: "Jahir Hussain", date: "February 14, 2024", stars: 5, review: "Exceptional! Will definitely come back." },
  ],
  t2: [
    { name: "Aisha Khan", date: "January 5, 2024", stars: 5, review: "Outstanding tech team and flawless delivery. Highly professional." },
    { name: "Rahul Nair", date: "December 22, 2023", stars: 4, review: "Very smooth process, though pricing could be more competitive." },
    { name: "Emily Chen", date: "November 1, 2023", stars: 5, review: "Absolutely loved the automation features. Would use again!" },
    { name: "Carlos Mendes", date: "October 10, 2023", stars: 3, review: "Service was okay, but expected more communication." },
    { name: "Fatima Noor", date: "September 28, 2023", stars: 4, review: "Efficient and reliable. Good overall experience." },
    { name: "Dan Brown", date: "August 12, 2023", stars: 5, review: "Their AI tools are game-changers. Highly recommended!" },
    { name: "Sana Yousuf", date: "July 19, 2023", stars: 5, review: "Perfect execution from start to finish!" },
  ],
  // Add more themes like t3, t4, etc., as needed
};

const Reviews = ({ bckgnd, fnts }) => {
  const [visibleReviews, setVisibleReviews] = useState(5);

  const reviews = reviewSets[fnts] || reviewSets['t1']; // fallback to t1 if not defined

  const renderStars = (stars) => {
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  const hideReviews = () => {
    setVisibleReviews(5);
  };

  return (
    <div className="reviews pt-2 pb-2">
      <div className={`contain-template ${bckgnd} fedb-t1`}>
        <div className='container'>
          <div className='row'>
            <div className='reviwe-cmn'>
              <div className='feed-head pb-3'>
                <h2 className={`${fnts}`}>Customer Reviews</h2>
              </div>
              {reviews.slice(0, visibleReviews).map((review, index) => (
                <div key={index} className="review-card">
                  <div className="header">
                    <h3 className="name">{review.name}</h3>
                    <span className="date">{review.date}</span>
                  </div>
                  <div className="stars">{renderStars(review.stars)}</div>
                  <p className="review-text">{review.review}</p>
                </div>
              ))}
              <div className="button-container">
                {visibleReviews < reviews.length && (
                  <button onClick={loadMoreReviews} className="load-more-button ylw-btn">
                    Load More Reviews
                  </button>
                )}
                {visibleReviews > 5 && (
                  <button onClick={hideReviews} className="hide-reviews-button ylw-btn">
                    Hide Reviews
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
