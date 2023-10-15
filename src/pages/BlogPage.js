import {Link} from "react-router-dom";
import blog1 from "~/assets/images/gallery/01.jpg"
import post2 from "~/assets/images/recent_post2.jpg"
import BlogItem from "~/components/blog/BlogItem";

const BlogPage = () => {


    return (
        <>
            <section className="page_title ds s-overlay s-parallax s-pt-130 s-pt-xl-150 s-pb-65">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h1>Blog 3 Bà Đồng</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Blog with Left Sidebar
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ds s-py-90 s-py-xl-150">
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

export default BlogPage;