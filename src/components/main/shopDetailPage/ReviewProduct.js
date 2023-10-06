import React from 'react';
function ReviewProduct() {
    return (
        <div className="panel wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
            <div id="reviews">
                <div id="comments">
                    <h2>3 reviews for <span>Ship Your Idea</span></h2>
                    <ol className="commentlist">
                        <li className="comment even thread-even depth-1" id="li-comment-34">
                            <div id="comment-34" className="comment_container">
                                <img alt="img" src="http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=60&amp;d=mm&amp;r=g" srcSet="http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" />
                                <div className="comment-text">
                                    <div className="star-rating">
                                        <span style={{ width: '80%' }}>Rated <strong className="rating">4</strong> out of 5</span>
                                    </div>
                                    <p className="meta">
                                        <strong>James Koster</strong> <span>–</span>
                                        <time dateTime="2013-06-07T11:43:13+00:00">June 7, 2013</time>
                                    </p>
                                    <div className="description">
                                        <p>Nice T-shirt, I got one in black. Goes with anything!</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="comment odd alt thread-odd thread-alt depth-1" id="li-comment-35">
                            <div id="comment-35" className="comment_container">
                                <img alt="img" src="http://0.gravatar.com/avatar/f0cde930b42c79145194679d5b6e3b1d?s=60&amp;d=mm&amp;r=g" srcSet="http://0.gravatar.com/avatar/f0cde930b42c79145194679d5b6e3b1d?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" />
                                <div className="comment-text">
                                    <div className="star-rating">
                                        <span style={{ width: '80%' }}>Rated <strong className="rating">4</strong> out of 5</span>
                                    </div>
                                    <p className="meta">
                                        <strong >Cobus Bester</strong> <span>–</span>
                                        <time dateTime="2013-06-07T11:55:15+00:00">June 7, 2013</time>
                                    </p>
                                    <div className="description">
                                        <p>Very comfortable shirt, and I love the graphic!</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="comment even thread-even depth-1" id="li-comment-36">
                            <div id="comment-36" className="comment_container">
                                <img alt="img" src="http://1.gravatar.com/avatar/7a6df00789e50714fcde1b759befcc84?s=60&amp;d=mm&amp;r=g" srcSet="http://1.gravatar.com/avatar/7a6df00789e50714fcde1b759befcc84?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" />
                                <div className="comment-text">
                                    <div className="star-rating">
                                        <span style={{ width: '100%' }}>Rated <strong className="rating">5</strong> out of 5</span>
                                    </div>
                                    <p className="meta">
                                        <strong>Stuart</strong>
                                        <span>–</span>
                                        <time dateTime="2013-06-07T13:02:14+00:00">June 7, 2013</time>
                                    </p>
                                    <div className="description">
                                        <p>Great T-shirt quality, Great Design and Great Service.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div id="review_form_wrapper">
                    <div id="review_form">
                        <div id="respond" className="comment-respond">
                            <span id="reply-title" className="comment-reply-title">Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="#respond" style={{ display: 'none' }}>Cancel reply</a></small></span>
                            <form action="/" method="post" id="commentform" className="comment-form" noValidate="">
                                <p className="comment-notes">
                                    <span id="email-notes">Your email address will not be published.</span>
                                    Required fields are marked <span className="required">*</span>
                                </p>
                                <div className="comment-form-rating">
                                    <label>Your rating</label>
                                    <p className="stars">
                                                  <span>
                                                    <a className="star-1" href="#">1</a>
                                                    <a className="star-2" href="#">2</a>
                                                    <a className="star-3" href="#">3</a>
                                                    <a className="star-4" href="#">4</a>
                                                    <a className="star-5" href="#">5</a>
                                                  </span>
                                    </p>
                                </div>
                                <p className="comment-form-comment">
                                    <label htmlFor="comment">Your review <span className="required">*</span></label>
                                    <textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required=""></textarea>
                                </p>
                                <p className="comment-form-author">
                                    <label htmlFor="author">Name <span className="required">*</span></label>
                                    <input id="author" name="author" type="text" value="" size="30" aria-required="true" required=""></input>
                                </p>
                                <p className="comment-form-email">
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input id="email" name="email" type="email" value="" size="30" aria-required="true" required=""></input>
                                </p>
                                <p className="form-submit">
                                    <input name="submit" type="submit" id="submit" className="submit" value="Submit"></input>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
}

export default ReviewProduct;
