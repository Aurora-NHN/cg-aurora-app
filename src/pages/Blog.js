import {Link} from "react-router-dom";
import blog1 from "~/assets/images/gallery/01.jpg"
import post2 from "~/assets/images/recent_post2.jpg"

const Blog = () => {
    return (
        <>

            <section className="ds s-py-90 s-py-xl-100">
                <div className="container">

                    <div className="row c-gutter-60">
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

                            <article
                                className="text-center text-md-left vertical-item content-padding ds bs bordered post type-post status-publish format-video has-post-thumbnail post_format-post-format-video">
                                <div className="item-media post-thumbnail">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <a href="https://www.youtube.com/embed/mcixldqDIEQ"
                                           className="embed-placeholder">
                                            <img src="../assets/images/gallery/02.jpg" alt="img"/>
                                        </a>
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
											<a href="#" rel="tag">Video post</a>
										</span>
                                    </div>
                                </div>
                            </article>

                            <article
                                className="text-center text-md-left vertical-item content-padding ds bs bordered post type-post status-publish  has-post-thumbnail post_format-post-format-gallery">
                                <div className="item-media post-thumbnail">
                                    <div className="owl-carousel owl-theme" data-loop="true" data-margin="0"
                                         data-nav="true" data-dots="false" data-themeclass="entry-thumbnail-carousel"
                                         data-center="false" data-items="1" data-autoplay="true" data-responsive-xs="1"
                                         data-responsive-sm="1" data-responsive-md="1" data-responsive-lg="1">
                                        <div className="item">
                                            <img src="../assets/images/gallery/03.jpg" alt="image"/>
                                        </div>
                                        <div className="item">
                                            <img src="../assets/images/gallery/04.jpg" alt="image"/>
                                        </div>
                                        <div className="item">
                                            <img src="../assets/images/gallery/05.jpg" alt="image"/>
                                        </div>
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
											<a href="#" rel="tag">Gallery post</a>
										</span>
                                    </div>
                                </div>
                            </article>

                            <article
                                className="text-center text-md-left vertical-item content-padding ds bs bordered post type-post status-publish format-chat has-post-thumbnail post_format-post-format-chat">
                                <div className="item-media post-thumbnail">
                                    <img src="../assets/images/gallery/06.jpg" alt="img"/>
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
                                        <p><strong>Steve:</strong> Strange as it may seem, they give ball players
                                            nowadays very peculiar names.</p>
                                        <p><strong>Anna:</strong> Funny names?</p>
                                        <p><strong>Steve:</strong> Nicknames, nicknames. Now, on the St. Louis team we
                                            have Who’s on first, What’s on second, I
                                            Don’t Know is on third–</p>
                                        <p><strong>Anna:</strong> That’s what I want to find out. I want you to tell me
                                            the names of the fellows on the St. Louis team.</p>
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
											<a href="#" rel="tag">Chat post</a>
										</span>
                                    </div>

                                </div>
                            </article>

                            <article
                                className="post text-center text-md-left type-post content-padding hero-bg status-publish format-link post_format-post-format-link">
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
                                            <a href="#">Simple link</a>
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
											<a href="#" rel="tag">Link post</a>
										</span>
                                    </div>
                                </div>
                            </article>

                            <article
                                className="text-center text-md-left cover-image ds bs bordered s-overlay post type-post status-publish format-status has-post-thumbnail post_format-post-format-status">
                                <div className="post-thumbnail">
                                    <a href="#">
                                        <img src="../assets/images/gallery/07.jpg" alt="img"/>
                                    </a>
                                </div>

                                <header className="item-header">
                                    <img src="../assets/images/avatar.jpg" className="avatar" alt="img"/>
                                        <h6 className="author-name mt-30 links-maincolor2 bold">
                                            <a href="#">Stephie J. Bellamy</a>
                                        </h6>
                                        <div className="entry-meta">
										<span>
											<a href="#" rel="bookmark">
												<time className="entry-date published updated"
                                                      dateTime="2018-03-18T15:15:12+00:00">03.12.2019</time>
											</a>
										</span>
                                        </div>
                                </header>
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
                                            horoscopes are now known factors for anyone aged
                                        </p>
                                    </div>
                                    <div className="tag-wrapper mt-30">
										<span className="tag-links">
											<a href="#" rel="tag">Post</a>
											<a href="#" rel="tag">Status post</a>
										</span>
                                    </div>
                                </div>

                            </article>

                            <article
                                className="text-center text-md-left cover-image ds bs bordered s-overlay post type-post status-publish format-quote has-post-thumbnail post_format-post-format-quote">
                                <div className="post-thumbnail">
                                    <a href="#">
                                        <img src="../assets/images/gallery/07.jpg" alt="img"/>
                                    </a>
                                </div>

                                <header className="item-header">
                                    <img src="../assets/images/avatar.jpg" className="avatar" alt="img"/>
                                </header>
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
                                    </header>

                                    <div className="entry-content mt-10">
                                        <blockquote>
                                            <p>
                                                Writing case studies was a daunting task for us. We didn’t know where to
                                                begin or what questions to ask and clients never seemed to follow
                                                through when we asked.
                                            </p>
                                        </blockquote>
                                    </div>
                                    <h5 className="author-name mt-30 mb-0 links-maincolor2 bold">
                                        <a href="#">Stephie J. Bellamy</a>
                                    </h5>
                                    <p className="text-white">Happy Customer</p>
                                    <div className="tag-wrapper mt-30">
										<span className="tag-links">
											<a href="#" rel="tag">Post</a>
											<a href="#" rel="tag">Quote post</a>
										</span>
                                    </div>
                                </div>

                            </article>

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
                        <aside className="col-lg-5 col-xl-4 order-lg-1">
                            <div className="widget widget_categories">

                                <h3 className="widget-title">Categories</h3>

                                <ul>
                                    <li className="cat-item">
                                        <a href="#">Astrology</a>
                                        <ul className="children">
                                            <li className="cat-item">
                                                <a href="#">Magic</a>
                                            </li>
                                            <li className="cat-item">
                                                <a href="#">Taro</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#">Horoscope</a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#">Natal Chart</a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#">Transit Chart</a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#">Medical Reading</a>
                                    </li>
                                    <li className="cat-item">
                                        <a href="#">Birth Stone</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="ds bs box-shadow bordered">
                                <div className="widget widget_search">
                                    <h3 className="widget-title">Search</h3>
                                    <form role="search" method="get" className="search-form" action="/">
                                        <label htmlFor="search-form-widget">
                                            <span className="screen-reader-text">Search for:</span>
                                        </label>
                                        <input type="search" id="search-form-widget" className="search-field"
                                               placeholder="Search" value="" name="search"/>
                                            <button type="submit" className="search-submit">
                                                <span className="screen-reader-text">Search</span>
                                            </button>
                                    </form>
                                </div>

                            </div>

                            <div className="widget widget_tag_cloud">

                                <h3 className="widget-title">Tags</h3>

                                <div className="tagcloud">

                                    <a href="#" className="tag-cloud-link">
                                        Astrology
                                    </a>

                                    <a href="#" className="tag-cloud-link">
                                        Natal Chart
                                    </a>

                                    <a href="#" className="tag-cloud-link">
                                        Horoscope
                                    </a>

                                    <a href="#" className="tag-cloud-link">
                                        Magic
                                    </a>

                                </div>
                            </div>


                            <div className="widget widget_flickr">

                                <h3 className="widget-title">Flickr</h3>
                                <ul className="flickr_ul"></ul>
                            </div>

                            <div className="widget widget_recent_posts">

                                <h3 className="widget-title">Popular Posts</h3>
                                <ul className="list-unstyled">
                                    <li className="media">
                                        <a className="media-image" href="#">
                                            <img src="../assets/images/recent_post1.jpg" alt="img"/>
                                        </a>
                                        <div className="media-body">
                                            <h4>
                                                <a href="#">Eod tempor invidunt labore dolore magna</a>
                                            </h4>
                                            <p className="item-meta">
                                                Dec 18, 2018
                                            </p>
                                        </div>
                                    </li>

                                    <li className="media">
                                        <a className="media-image" href="#">
                                            <img src={post2} alt="img"/>
                                        </a>
                                        <div className="media-body">
                                            <h4>
                                                <a href="#">Aliquyam erat, sed voluptua vero
                                                    eos </a>
                                            </h4>
                                            <p className="item-meta">
                                                Nov 22, 2018
                                            </p>

                                        </div>
                                    </li>

                                    <li className="media">
                                        <a className="media-image" href="#">
                                            <img src="../assets/images/recent_post1.jpg" alt="img"/>
                                        </a>
                                        <div className="media-body">
                                            <h4>
                                                <a href="#">Et justo duo dolores et ea rebum</a>
                                            </h4>
                                            <p className="item-meta">
                                                Nov 12, 2018
                                            </p>

                                        </div>
                                    </li>

                                </ul>
                            </div>


                        </aside>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Blog;