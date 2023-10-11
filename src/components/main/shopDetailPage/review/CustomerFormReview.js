import React from "react";
function CustomerFormReview() {
  return (
    <div id="review_form_wrapper">
      <div id="review_form">
        <div id="respond" className="comment-respond">
          <span id="reply-title" className="comment-reply-title">
            Add a review{" "}
            <small>
              <a
                rel="nofollow"
                id="cancel-comment-reply-link"
                href="#respond"
                style={{ display: "none" }}
              >
                Cancel reply
              </a>
            </small>
          </span>
          <form
            action="/"
            method="post"
            id="commentform"
            className="comment-form"
            noValidate=""
          >
            <p className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              Required fields are marked <span className="required">*</span>
            </p>
            <div className="comment-form-rating">
              <label>Your rating</label>
              <p className="stars">
                <span>
                  <a className="star-1" href="#">
                    1
                  </a>
                  <a className="star-2" href="#">
                    2
                  </a>
                  <a className="star-3" href="#">
                    3
                  </a>
                  <a className="star-4" href="#">
                    4
                  </a>
                  <a className="star-5" href="#">
                    5
                  </a>
                </span>
              </p>
            </div>
            <p className="comment-form-comment">
              <label htmlFor="comment">
                Your review <span className="required">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                cols="45"
                rows="8"
                aria-required="true"
                required=""
              ></textarea>
            </p>
            <p className="comment-form-author">
              <label htmlFor="author">
                Name <span className="required">*</span>
              </label>
              <input
                id="author"
                name="author"
                type="text"
                value=""
                size="30"
                aria-required="true"
                required=""
              ></input>
            </p>
            <p className="comment-form-email">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value=""
                size="30"
                aria-required="true"
                required=""
              ></input>
            </p>
            <p className="form-submit">
              <input
                name="submit"
                type="submit"
                id="submit"
                className="submit"
                value="Submit"
              ></input>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CustomerFormReview;
