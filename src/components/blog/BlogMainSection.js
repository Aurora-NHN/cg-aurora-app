import React from 'react';
import blog1 from "~/assets/images/gallery/01.jpg";
import BlogItem from "~/components/blog/BlogItem";

function BlogMainSection(props) {
    return (
        <main className="col-lg-7 col-xl-8 order-lg-2">
            <article
                className="text-center ds bs bordered text-md-left vertical-item content-padding post type-post status-publish format-standard has-post-thumbnail sticky">

                <i className="fa fa-thumb-tack" aria-hidden="true"></i>

                <div className="item-media post-thumbnail">
                    <img src={blog1} alt="img"/>
                    <div className="media-links">
                        <a className="abs-link" href="#"></a>
                    </div>
                </div>
                <div className="item-content">
                    <header className="entry-header">
										<span className="cat-links">

											<span className="screen-reader-text">Categories</span>
											<a href="#" rel="category tag">
												Astrology
											</a>,
											<a href="#" rel="category tag">
												Horoscope
											</a>
										</span>
                        <h4 className="entry-title mb-3 links-maincolor2">
                            <a className="fs-30" href="#" rel="bookmark">
                                Study Astrology and Tarot for Yourself – or a Career
                            </a>
                        </h4>


                    </header>

                    <div className="entry-content mt-35">
                        <p>
                            The boom in Millennial Astrology (for people born 1990 to 1995) means
                            horoscopes are now known factors for anyone aged around 20, 21, 22, 23, 24,
                            25, 26...
                        </p>
                    </div>
                    <div className="entry-footer">
                        <div className="entry-meta">
											<span>
												<a href="#" rel="bookmark">
													<time className="entry-date published updated"
                                                          dateTime="2018-03-18T15:15:12+00:00">03.12.2019</time>
												</a>
											</span>
                            <span className="comments-link">
												<i className="fa fa-comments"></i>
												<span className="screen-reader-text">4 Comments</span>
												<a href="#">4</a>
											</span>
                        </div>
                        <div>
                            <a href="#" className="mt-30 font-2">Read Now <i
                                className="fa fa-caret-right color-main ml-2"></i></a>
                        </div>
                    </div>
                    <div className="tag-wrapper mt-30">
										<span className="tag-links">
											<a href="#" rel="tag">Post</a>
											<a href="#" rel="tag">Simple post</a>
										</span>
                    </div>
                </div>
            </article>

            <BlogItem/>

            <nav className="navigation pagination " role="navigation">
                <h2 className="screen-reader-text">Posts navigation</h2>
                <div className="nav-links">
                    <a className="prev page-numbers" href="#">
                        <i className="fa fa-chevron-left"></i>
                        <span className="screen-reader-text">Previous page</span>
                    </a>
                    <a className="page-numbers" href="#">
                        <span className="meta-nav screen-reader-text">Page </span>
                        1
                    </a>
                    <span className="page-numbers current">
										<span className="meta-nav screen-reader-text">Page </span>
										2
									</span>
                    <a className="page-numbers" href="#">
                        <span className="meta-nav screen-reader-text">Page </span>
                        3
                    </a>
                    <a className="next page-numbers" href="#">
                        <span className="screen-reader-text">Next page</span>
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </div>
            </nav>
        </main>
    );
}

export default BlogMainSection;