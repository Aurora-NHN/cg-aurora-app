import React from 'react';

function BlogCategory(props) {
    return (
        <div className="widget widget_categories">
            <h3 className="widget-title">Categories</h3>
            <ul>
                <li className="cat-item">
                    <a href="src/components/blog#">Astrology</a>
                    <ul className="children">
                        <li className="cat-item">
                            <a href="src/components/blog#">Magic</a>
                        </li>
                        <li className="cat-item">
                            <a href="src/components/blog#">Taro</a>
                        </li>
                    </ul>
                </li>
                <li className="cat-item">
                    <a href="src/components/blog#">Horoscope</a>
                </li>
                <li className="cat-item">
                    <a href="src/components/blog#">Natal Chart</a>
                </li>
                <li className="cat-item">
                    <a href="src/components/blog#">Transit Chart</a>
                </li>
                <li className="cat-item">
                    <a href="src/components/blog#">Medical Reading</a>
                </li>
                <li className="cat-item">
                    <a href="src/components/blog#">Birth Stone</a>
                </li>
            </ul>
        </div>
    );
}

export default BlogCategory;