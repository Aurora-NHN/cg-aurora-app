import React from 'react';
import BlogCategory from "~/components/blog/aside/BlogCategory";
import BlogSearch from "~/components/blog/aside/BlogSearch";
import BlogTag from "~/components/blog/aside/BlogTag";
import PopularBlog from "~/components/blog/aside/PopularBlog";

function BlogSideBar(props) {


    return (
        <aside className="col-lg-5 col-xl-4 order-lg-1">

            <BlogCategory/>

            <BlogSearch/>

            <BlogTag/>

            <PopularBlog/>

        </aside>
    );
}

export default BlogSideBar;