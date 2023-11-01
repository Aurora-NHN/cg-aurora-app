import BlogTopBanner from "~/components/blog/BlogTopBanner";
import BlogSideBar from "~/components/blog/aside/BlogSideBar";
import BlogMainSection from "~/components/blog/BlogMainSection";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs, selectGetBlogsSuccess} from "~/features/blogSlice";
import {useEffect, useState} from "react";
import BlogFullContent from "~/components/blog/BlogFullContent";

const BlogPage = () => {
    const params = useParams();
    const [blogId, setBlogId] = useState(0);
    const dispatch = useDispatch();
    const blogSuccess = useSelector(selectGetBlogsSuccess)

    useEffect(() => {
        setBlogId(+params.id);

        window.scrollTo({behavior: "smooth", left: 0, top: 500})
    }, [params.id]);

    useEffect(() => {
        if (!blogSuccess) {
            dispatch(getBlogs())
        }
    }, [])
    return (
        <>
            <BlogTopBanner/>
            <section className="ds s-py-90 s-py-xl-150 pt-4">
                <div className="container">
                    <div className="row c-gutter-60">
                        {
                            blogId
                                ? <BlogFullContent blogId={blogId}/>
                                : <BlogMainSection/>
                        }
                        <BlogSideBar/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;