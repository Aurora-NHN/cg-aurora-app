import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectBlogs} from "~/features/blogSlice";
import style from "./blog.module.scss"

function BlogFullContent({blogId}) {
    const parse = require('html-react-parser');
    const blogs = useSelector(selectBlogs);
    const [blog, setBlog] = useState({});

    useEffect(() => {
        if (blogId) {
            const filteredBlog = blogs.filter(blog => +blog.id === +blogId)[0]
            if (filteredBlog)
                setBlog(filteredBlog);
        }
    }, [blogs,blogId]);

    return (
        <main className="col-lg-7 col-xl-8 order-lg-2">
            <article
                className="text-center vertical-item content-padding ds bs bordered post post_format-post-format-video box-shadow">
                <div className="item-media post-thumbnail">
                    <img className="img-fluid object-fit-contain"
                         style={{maxHeight: 500}}
                         src={blog.mainImageUrl}
                         alt="img"/>
                </div>
                <div className="item-content">
                    <header className="entry-header">
                    <span className="cat-links">
                        <span className="screen-reader-text">Categories</span>
                        <a href="#blogHeader">{blog.author}</a>
                    </span>
                        <h4 className="entry-title mb-3 fs-2">
                            <strong className="lh-sm">{blog.title}</strong>
                        </h4>
                    </header>
                    <div className={style.blogFullContent}>
                        {blog.content ? parse(blog.content) : ""}
                    </div>
                    <div className="entry-content mt-35">
                        <p>
                            {/*{blog.description}*/}
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
        </main>
    );
}

export default BlogFullContent;