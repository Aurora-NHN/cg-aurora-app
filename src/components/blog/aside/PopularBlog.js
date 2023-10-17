import React, {useEffect, useState} from 'react';
import post2 from "~/assets/images/recent_post2.jpg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectBlogs} from "~/features/blogSlice";
const data = [
    {
        id: 1,
        mainImage: post2,
        title: 'Eod tempor invidunt labore dolore magna',
        createdAt: 'Dec 18, 2018'
    },
    {
        id: 2,
        mainImage: post2,
        title: 'Et justo duo dolores et ea rebum',
        createdAt: 'Nov 12, 2018'
    },
    {
        id: 3,
        mainImage: post2,
        title: 'Aliquyam erat, sed voluptua veroeos',
        createdAt: 'Nov 22, 2018'
    },
    {
        id : 4,
        mainImage: post2,
        title: 'Et justo duo dolores et ea rebum',
        createdAt: 'Nov 12, 2018'
    }
]
function PopularBlog({blog}) {
    const blogs = useSelector(selectBlogs);

    return (
        <div className="widget widget_recent_posts">
            <h3 className="widget-title">Popular Posts</h3>
            <div className="list-unstyled">
                {
                    blogs.map(blog => (
                        <div className="media border border-dark rounded mt-2" key={blog.id}>
                            <Link className="media-image w-50" to={`/blogs/${blog.id}`}>
                                <img src={blog.mainImageUrl} className="rounded-start" alt="img"/>
                            </Link>
                            <div className="media-body w-50 position-relative">
                                <div className="pe-2">
                                    <Link to={`/blogs/${blog.id}`} className="d-block overflow-hidden mt-2" style={{width:'100%'}}>{blog.title?.slice(0,50)}...</Link>
                                </div>
                                <p className="item-meta position-absolute bottom-0 end-0">
                                    <span className="me-2">{blog.createdAt}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PopularBlog;