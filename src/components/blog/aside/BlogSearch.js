import React, {useRef, useState} from 'react';
import clsx from "clsx";
import style from "../blog.module.scss"
import {useDispatch} from "react-redux";
import {searchBlogs} from "~/features/blogSlice";
import {useNavigate} from "react-router-dom";

function BlogSearch() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    const [validKeyword, setValidKeyword] = useState(true);

    const handleChange = (event) => {
        setSearchKey(event.target.value)
        setValidKeyword(true)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch()
        }
    }
    const handleSearch = () => {
        if (searchKey && searchKey.length > 1 && searchKey.length < 255) {
            dispatch(searchBlogs(searchKey));
            navigate("/blogs")
        } else {
            setValidKeyword(false)
        }
    }

    return (
        <div className="ds bs box-shadow bordered rounded">
            <div className="widget widget_search">
                <label htmlFor="search-form-widget"><h3 className="widget-title">Search</h3></label>
                <form role="search" className="search-form">
                    <input
                        id="search-form-widget"
                        className={clsx("search ps-4", style.blogSearch)}
                        onChange={handleChange}
                        placeholder="Search"
                        onKeyDown={handleKeyDown}
                    />

                    <button type="button" onClick={handleSearch}>
                        <span className="screen-reader-text">Search</span>
                    </button>
                </form>
                <div>
                    <small hidden={validKeyword}
                           className="text-warning text-opacity-50 ms-2">
                        Invalid key word
                    </small>
                </div>
            </div>

        </div>
    );
}

export default BlogSearch;