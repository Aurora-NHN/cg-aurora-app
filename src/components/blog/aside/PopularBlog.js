import React, {useEffect, useState} from 'react';
import post2 from "~/assets/images/recent_post2.jpg";
import {Link} from "react-router-dom";
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
function PopularBlog(props) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(data)
    },[]);

    return (
        <div className="widget widget_recent_posts">
            <h3 className="widget-title">Popular Posts</h3>
            <ul className="list-unstyled">
                {
                    blogs.map(blog => (
                        <li className="media" key={blog.id}>
                            <Link className="media-image" to={`/blogs/${blog.id}`}>
                                <img src={blog.mainImage} alt="img"/>
                            </Link>
                            <div className="media-body">
                                <h4>
                                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                                </h4>
                                <p className="item-meta">
                                    {blog.createdAt}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PopularBlog;