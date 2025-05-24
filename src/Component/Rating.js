import React, { useState } from 'react';

const Reviews = ({ bckgnd, fnts, content }) => {
    const [visibleReviews, setVisibleReviews] = useState(5);

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
                            {content.slice(0, visibleReviews).map((review, index) => (
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
                                {visibleReviews < content.length && (
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