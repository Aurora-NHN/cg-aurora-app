import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AURORA_API} from "~/app/constants";

function BlogItem(props) {
    const [blog, setBlog] = useState({});
    const parse = require('html-react-parser');
    useEffect(() => {
        axios.get(AURORA_API + "/blogs").then(response => {
            setBlog(response.data[0])
        }).catch(e => {

        })
    }, [])

    return (
        <>
            <article
                className="text-center text-md-left vertical-item content-padding ds bs bordered post type-post status-publish format-video has-post-thumbnail post_format-post-format-video">
                <div className="item-media post-thumbnail">
                    <img className="img-fluid" src={blog.mainImageUrl} style={{maxHeight:300, objectFit: "cover"}} alt="img"/>
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
                                {blog.title}
                            </a>
                        </h4>


                    </header>

                    <div className="entry-content mt-35">
                        <p>
                            The boom in Millennial Astrology (for people born 1990 to 1995) means
                            horoscopes are now known factors for anyone aged around 20, 21, 22, 23, 24,
                            25, 26...
                        </p>
                        {
                            blog.content? parse(blog.content):<></>
                        }



                    </div>
                    <div className="entry-footer">
                        <div className="entry-meta">
											<span>
												<a href="#" rel="bookmark">
													<time className="entry-date published updated"
                                                          dateTime="2018-03-18T15:15:12+00:00">{blog.createdAt}</time>
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

        </>
    );
}

export default BlogItem;