import React from 'react';

function BlogTag(props) {
    return (
        <div className="widget widget_tag_cloud">

            <h3 className="widget-title">Tags</h3>

            <div className="tagcloud">

                <a href="src/components/blog#" className="tag-cloud-link">
                    Astrology
                </a>

                <a href="src/components/blog#" className="tag-cloud-link">
                    Natal Chart
                </a>

                <a href="src/components/blog#" className="tag-cloud-link">
                    Horoscope
                </a>

                <a href="src/components/blog#" className="tag-cloud-link">
                    Magic
                </a>

            </div>
        </div>
    );
}

export default BlogTag;