import React from "react";
import s from "./Paginator.module.css";
const Paginator = ({ usersCount, pageSize, onChangePage, currentPage }) => {
  let pagesCount = Math.ceil(usersCount / pageSize);
  if (pagesCount > 20) pagesCount = 25;
  let pages = [];
  for (let i = 0; i < pagesCount; i++) pages.push(i + 1);

  return (
    <div className={s.pagesBtn}>
      {pages.map((p) => {
        return (
          <span
            onClick={() => onChangePage(p)}
            className={currentPage === p && s.actBtn}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
