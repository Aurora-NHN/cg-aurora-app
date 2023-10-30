import React from "react";

function Pagination({
                        totalPage = 3,
                        pageNumber,
                        isNextButtonDisabled,
                        onNextPage,
                        onPrevPage,
                        onPageClick,
                    }) {
    return (
        <nav className="woocommerce-pagination">
            <ul className="page-numbers">
                <li>
                    <a
                        className="prev page-numbers"
                        onClick={onPrevPage}
                        disabled={pageNumber === 1}
                    ></a>
                </li>
                {Array.from({length: totalPage}, (_, index) => (
                    <li key={index}>
                        <a
                            className={`page-numbers${
                                pageNumber === index + 1 ? " current" : ""
                            }`}
                            onClick={() => onPageClick(index)}
                        >
                            {index + 1}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        className="next page-numbers"
                        onClick={onNextPage}
                        disabled={isNextButtonDisabled}
                    >
                        →
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
