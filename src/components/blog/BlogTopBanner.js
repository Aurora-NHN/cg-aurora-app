import React from 'react';
import {Link} from "react-router-dom";

function BlogTopBanner(props) {
    return (
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
    );
}

export default BlogTopBanner;