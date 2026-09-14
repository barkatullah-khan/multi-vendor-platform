import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("pending");
  }, [orderId]);

  const statusHandle = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        {/* Top Header & Status Selector */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-xl text-[#d0d2d6] font-semibold">
            Order Details: #{orderId}
          </h2>
          <select
            onChange={statusHandle}
            value={status}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="warehouse">Warehouse</option>
            <option value="placed">Placed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Main Content Layout */}
        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>Deliver to: </h2>
            <span className="text-[#d0d2d6] font-normal">Warehouse 1</span>
          </div>

          <div className="flex md:flex-row flex-col gap-[#4c7fe069] mt-4">
            {/* Order & Shipping Info */}
            <div className="md:w-1/2 w-full text-[#d0d2d6]">
              <div className="pr-3 text-[#d0d2d6] text-base">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">Deliver to: John Doe</h2>
                  <p>
                    <span className="text-sm">
                      Address: 123 Main Street, Suite 4B, New York, NY
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3 mt-4">
                  <h2>Payment Status: </h2>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md text-xs font-semibold">
                    Paid
                  </span>
                </div>
                <div className="flex justify-start items-center gap-3 mt-2">
                  <h2>Price: </h2>
                  <span className="text-indigo-400 font-bold">$560</span>
                </div>

                {/* Item List */}
                <div className="mt-6 flex flex-col gap-4">
                  {[1, 2].map((p, i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-md bg-[#161d31] p-3 rounded-md"
                    >
                      <img
                        className="w-[60px] h-[60px] rounded-md object-cover"
                        src={`/images/category/${p}.jpg`}
                        alt="Product"
                      />
                      <div className="flex flex-col justify-center text-[#d0d2d6]">
                        <h2 className="font-semibold">Men Sports Shoes</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Nike | </span>
                          <span className="text-xs text-indigo-400">
                            Qty: 2
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
