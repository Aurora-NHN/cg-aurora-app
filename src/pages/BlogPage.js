import BlogTopBanner from "~/components/blog/BlogTopBanner";
import BlogSideBar from "~/components/blog/aside/BlogSideBar";
import BlogMainSection from "~/components/blog/BlogMainSection";

const BlogPage = () => {


    return (
        <>
            <BlogTopBanner/>
            <section className="ds s-py-90 s-py-xl-150">
                <div className="container">
                    <div className="row c-gutter-60">
                        <BlogMainSection/>
                        <BlogSideBar/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;