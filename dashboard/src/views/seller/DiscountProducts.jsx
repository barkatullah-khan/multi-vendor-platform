import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import Search from "../components/Search";
import Pagination from "../Pagination";

const DiscountProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        {/* Search & Rows Per Page */}
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        {/* Discount Products Table */}
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-xs text-[#d0d2d6] uppercase border-b border-slate-700 bg-[#161d31]">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4">
                  Stock
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-700 hover:bg-slate-800/50 transition-all"
                >
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <img
                      className="w-[45px] h-[45px] rounded-md object-cover"
                      src={`/images/category/${d}.jpg`}
                      alt="Product"
                    />
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Men Sports Shoes...
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Sports
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Nike
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    $120
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <span className="text-green-500 font-semibold">15%</span>
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    20
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/seller/dashboard/edit-product/${d}`}
                        className="p-[6px] bg-[#7367f01f] text-[#7367f0] hover:shadow-lg hover:shadow-indigo-500/50 rounded"
                      >
                        <FaEdit />
                      </Link>
                      <Link
                        to={`/seller/dashboard/add-banner/${d}`}
                        className="p-[6px] bg-[#28c76f1f] text-[#28c76f] hover:shadow-lg hover:shadow-green-500/50 rounded"
                      >
                        <BsImages />
                      </Link>
                      <Link
                        to={`/seller/dashboard/product/details/${d}`}
                        className="p-[6px] bg-[#00cfe81f] text-[#00cfe8] hover:shadow-lg hover:shadow-cyan-500/50 rounded"
                      >
                        <FaEye />
                      </Link>
                      <button className="p-[6px] bg-[#ea54551f] text-[#ea5455] hover:shadow-lg hover:shadow-red-500/50 rounded">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
