import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Search from "../components/Search";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      {/* Main Container with Blue Theme Background */}
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md shadow-md text-white">
        
        {/* Search & Rows Per Page Controls */}
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        {/* Orders Table */}
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-white">
            {/* Darker Header for Clean Contrast */}
            <thead className="text-xs text-white uppercase border-b border-[#5a4cb8] bg-[#5a4cb8]">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
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
                  className="border-b border-[#5a4cb8] hover:bg-[#5a4cb8]/50 transition-all text-white"
                >
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    #3452{d}
                  </td>
                  <td className="py-3 px-4 font-semibold whitespace-nowrap">
                    $560
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span className="px-2.5 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-md text-xs font-bold">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md text-xs font-bold">
                      Pending
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <Link
                      to={`/seller/dashboard/order/details/${d}`}
                      className="p-[6px] bg-green-500 hover:bg-green-600 text-white hover:shadow-lg hover:shadow-green-500/30 rounded flex justify-center items-center w-[30px] h-[30px] transition-all"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="w-full flex justify-end mt-4">
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

export default Orders;