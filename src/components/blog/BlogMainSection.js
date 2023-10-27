import React, {useEffect, useState} from 'react';
import blog1 from "~/assets/images/gallery/01.jpg";
import BlogItem from "~/components/blog/BlogItem";
import axios from "axios";
import {AURORA_API} from "~/app/constants";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs, selectBlogs, selectGetBlogsSuccess} from "~/features/blogSlice";

function BlogMainSection(props) {
    const dispatch = useDispatch();
    const blogList = useSelector(selectBlogs)
    const blogSuccess = useSelector(selectGetBlogsSuccess)

    useEffect(() => {
        if (!blogSuccess){
            dispatch(getBlogs())
        }
    }, [])

    return (
        <main className="col-lg-7 col-xl-8 order-lg-2">
            {
                blogList.map(blog => <BlogItem key={blog.id} blog={blog}/>)
            }

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