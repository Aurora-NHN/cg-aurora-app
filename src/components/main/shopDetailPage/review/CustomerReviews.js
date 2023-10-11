import React from 'react';
function CustomerReviews(props){
    const customerReview = props.customerReview;
    return(
        <div className="comment even thread-even depth-1" id="li-comment-34">
            <div id="comment-34" className="comment_container">
                <img alt="img" src={customerReview.image} srcSet={`${customerReview.imageSet} 2x`} className="avatar avatar-60 photo" height="60" width="60" />
                <div className="comment-text">
                    <div className="star-rating">
                        <span style={{ width: '80%' }}>Rated <strong className="rating">{customerReview.rated}</strong> out of 5</span>
                    </div>
                    <p className="meta">
                        <strong>{customerReview.name}</strong> <span>–</span>
                        <time dateTime="2013-06-07T11:43:13+00:00">{customerReview.date}</time>
                    </p>
                    <div className="description">
                        <p>{customerReview.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CustomerReviews;