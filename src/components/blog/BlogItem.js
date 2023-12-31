import React from 'react';
import {Link} from "react-router-dom";

function BlogItem({blog = {}}) {
    return (
        <>
            <article
                className="text-center vertical-item content-padding ds bs bordered post post_format-post-format-video box-shadow">
                <div className="item-media post-thumbnail">
                    <img className="img-fluid" src={blog.mainImageUrl} style={{maxHeight: 300, objectFit: "cover"}}
                         alt="img"/>
                    <div className="media-links">
                        <Link className="abs-link" to={"/blogs/" + blog.id}></Link>
                    </div>
                </div>
                <div className="item-content">
                    <header className="entry-header">
                    <span className="cat-links">
                        <span className="screen-reader-text">Categories</span>
                        <a href="#blogHeader">{blog.author}</a>
                    </span>
                        <h4 className="entry-title mb-3 links-maincolor2">
                            <Link className="fs-30" to={"/blogs/" + blog.id} rel="bookmark">
                                {blog.title}
                            </Link>
                        </h4>
                    </header>
                    <div className="entry-content mt-35">
                        <p>
                            {blog.description}
                        </p>
                    </div>
                    <div className="entry-footer">
                        <div className="entry-meta">
                        <span>
                            <a href="#blogHeader" rel="bookmark">
                                <time className="entry-date published updated"
                                      dateTime="2018-03-18T15:15:12+00:00">
                                    {blog.createdAt}
                                </time>
                            </a>
                        </span>
                            <span className="comments-link">
                            <i className="fa fa-comments"></i>
                            <span className="screen-reader-text">4 Comments</span>
                            <p>4</p>
                        </span>

                        </div>
                        <div>
                            <Link to={"/blogs/" + blog.id} className="mt-30 font-2">Read Now <i
                                className="fa fa-caret-right color-main ml-2"></i></Link>
                        </div>
                    </div>
                    <div className="tag-wrapper mt-30">
                    <span className="tag-links">
                        <a href="#" rel="tag">Astrology</a>
                        <a href="#" rel="tag">Horoscope</a>
                    </span>
                    </div>
                </div>
            </article>
        </>
    );
}

export default BlogItem;