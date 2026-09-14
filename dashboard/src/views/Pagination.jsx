import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  parPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }
  if (startPage <= 0) {
    startPage = 1;
  }

  let createBtn = () => {
    const btns = [];
    for (let i = startPage; i < startPage + showItem; i++) {
      if (i <= totalPage) {
        btns.push(
          <li
            key={i}
            onClick={() => setPageNumber(i)}
            className={`
                            ${pageNumber === i ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" : "bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 text-[#d0d2d6]"} 
                            w-8.25 h-8.25 rounded-full flex justify-center items-center cursor-pointer
                        `}
          >
            {i}
          </li>,
        );
      }
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-8.25 h-8.25 rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer"
        >
          <BsChevronDoubleLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-8.25 h-8.25 rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer"
        >
          <BsChevronDoubleRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
