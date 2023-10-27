import React from 'react';

function BlogSearch(props) {

    return (
        <div className="ds bs box-shadow bordered">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>
                <form role="search" className="search-form">
                    <label htmlFor="search-form-widget">
                        <span className="screen-reader-text">Search for:</span>
                    </label>
                    <input type="search"
                           id="search-form-widget"
                           className="search-field"
                           placeholder="Search"
                    />
                    <button type="submit" className="search-submit">
                        <span className="screen-reader-text">Search</span>
                    </button>
                </form>
            </div>

        </div>
    );
}

export default BlogSearch;