import React, { useState } from "react";
import { FaEye, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  // Track open state per specific order ID (e.g., show = 1 or show = 2)
  const [show, setShow] = useState("");

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        {/* Header Controls */}
        <div className="flex justify-between items-center">
          <select
            value={parPage}
            onChange={(e) => {
              setParPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
              setCurrentPage(1);
            }}
            value={searchValue}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Orders Table */}
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left text-[#d0d2d6] uppercase border-b border-slate-700">
            <div className="flex justify-between items-center font-bold">
              <div className="py-3 w-[25%]">Order Id</div>
              <div className="py-3 w-[13%]">Price</div>
              <div className="py-3 w-[18%]">Payment Status</div>
              <div className="py-3 w-[18%]">Order Status</div>
              <div className="py-3 w-[18%]">Action</div>
              <div className="py-3 w-[8%]">
                <FaArrowDown className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="text-[#d0d2d6]">
            {/* Dynamic Map over Order List */}
            {[1, 2, 3, 4, 5].map((order, i) => (
              <div key={i} className="border-b border-slate-700">
                <div className="flex justify-between items-start font-medium">
                  <div className="py-4 w-[25%] whitespace-nowrap">#64319208{i + 1}</div>
                  <div className="py-4 w-[13%]">${450 + i * 50}</div>
                  <div className="py-4 w-[18%]">
                    <span className="bg-green-500/10 text-green-500 text-xs px-2.5 py-1 rounded-sm">
                      paid
                    </span>
                  </div>
                  <div className="py-4 w-[18%]">
                    <span className="bg-indigo-500/10 text-indigo-500 text-xs px-2.5 py-1 rounded-sm">
                      pending
                    </span>
                  </div>
                  <div className="py-4 w-[18%]">
                    <Link
                      to={`/admin/dashboard/order/details/${i + 1}`}
                      className="p-[6px] bg-green-500 hover:shadow-lg hover:shadow-green-500/50 text-white rounded flex justify-center items-center w-[30px]"
                    >
                      <FaEye />
                    </Link>
                  </div>
                  <div className="py-4 w-[8%]">
                    <FaArrowDown
                      onClick={() => setShow(show === i ? "" : i)}
                      className={`cursor-pointer transition-all ${show === i ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </div>

                {/* Sub-Orders Breakdown (Multi-Vendor Sellers) */}
                <div
                  className={
                    show === i
                      ? "block bg-[#323d57] border-b border-slate-700 font-medium"
                      : "hidden"
                  }
                >
                  <div className="flex justify-between items-start border-b border-slate-700 p-3">
                    <div className="w-[25%] whitespace-nowrap">#64319208{i + 1} (Seller 1)</div>
                    <div className="w-[13%]">$150</div>
                    <div className="w-[18%]">
                      <span className="bg-green-500/10 text-green-500 text-xs px-2.5 py-1 rounded-sm">
                        paid
                      </span>
                    </div>
                    <div className="w-[18%]">
                      <span className="bg-indigo-500/10 text-indigo-500 text-xs px-2.5 py-1 rounded-sm">
                        pending
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-b border-slate-700 p-3">
                    <div className="w-[25%] whitespace-nowrap">#64319208{i + 1} (Seller 2)</div>
                    <div className="w-[13%]">$300</div>
                    <div className="w-[18%]">
                      <span className="bg-green-500/10 text-green-500 text-xs px-2.5 py-1 rounded-sm">
                        paid
                      </span>
                    </div>
                    <div className="w-[18%]">
                      <span className="bg-indigo-500/10 text-indigo-500 text-xs px-2.5 py-1 rounded-sm">
                        pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
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