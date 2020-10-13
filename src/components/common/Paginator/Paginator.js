import React, { useState } from "react";
import s from "./Paginator.module.css";
const Paginator = ({
  totalItemsCount,
  pageSize,
  onChangePage,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 0; i < pagesCount; i++) pages.push(i + 1);

  let portionCount = Math.ceil(pagesCount / pageSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let letfPortionPageNumber = (portionNumber - 1) * pageSize + 1;
  let rightPortionPageNumber = portionNumber * pageSize;
  let startPage = pages[0];
  let endPage = pages[pages.length - 1];

  return (
    <div className={s.pagesBtn}>
      {portionNumber > 1 && (
        <>
          <button onClick={() => setPortionNumber(portionNumber - 1)}>
            PREV
          </button>
          <span
            key={startPage}
            onClick={() => {
              onChangePage(startPage);
              setPortionNumber(1);
            }}
            className={currentPage === pages[startPage] && s.actBtn}
          >
            {pages[startPage] - 1} ...
          </span>
        </>
      )}
      {pages
        .filter(
          (p) => p >= letfPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              onClick={() => onChangePage(p)}
              className={currentPage === p && s.actBtn}
            >
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <>
          <span
            key={endPage}
            onClick={() => {
              onChangePage(endPage);
              setPortionNumber(portionCount);
            }}
            className={currentPage === endPage && s.actBtn}
          >
            ... {endPage}
          </span>
          <button onClick={() => setPortionNumber(portionNumber + 1)}>
            NEXT
          </button>
        </>
      )}
    </div>
  );
};

export default Paginator;
