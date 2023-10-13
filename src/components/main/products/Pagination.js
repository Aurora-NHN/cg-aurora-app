import React from "react";

function Pagination({
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
        {Array.from({ length: 3 }, (_, index) => (
          <li key={index}>
            <a
              className={`page-numbers${
                pageNumber === index + 1 ? " current" : ""
              }`}
              onClick={() => onPageClick(index + 1)}
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
