import React from "react";
function FormComment(){
    return (
      <form
        action="/"
        method="post"
        id="commentform"
        className="comment-form"
        novalidate
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
          <label for="comment">
            Your review <span className="required">*</span>
          </label>
          <textarea
            id="comment"
            name="comment"
            cols="45"
            rows="8"
            aria-required="true"
            required
          ></textarea>
        </p>
        <p className="comment-form-author">
          <label for="author">
            Name <span className="required">*</span>
          </label>
          <input
            id="author"
            name="author"
            type="text"
            value=""
            size="30"
            aria-required="true"
            required
          />
        </p>
        <p className="comment-form-email">
          <label for="email">
            Email <span className="required">*</span>
          </label>{" "}
          <input
            id="email"
            name="email"
            type="email"
            value=""
            size="30"
            aria-required="true"
            required
          />
        </p>
        <p className="form-submit">
          <input
            name="submit"
            type="submit"
            id="submit"
            className="submit"
            value="Submit"
          />
        </p>
      </form>
    );
}