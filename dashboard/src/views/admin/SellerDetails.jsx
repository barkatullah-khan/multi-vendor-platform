import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SellerDetails = () => {
  const { sellerId } = useParams();
  const [status, setStatus] = useState("");

  const submitStatus = (e) => {
    e.preventDefault();
    // Dispatches status update action to Redux store
    console.log("Updated Seller Status:", status);
  };

  return (
    <div className="px-2 lg:px-7 pt-5 min-h-screen bg-[#cdcae9]">
      <div className="w-full p-4 bg-[#6d65e8] rounded-md text-white shadow-md">
        <h1 className="text-xl font-bold mb-4 text-white">Seller Details</h1>

        <div className="w-full flex flex-wrap text-white">
          {/* Left: Seller Image Panel */}
          <div className="w-full lg:w-3/12 flex justify-center items-center py-3">
            <div>
              <img
                className="w-full h-[230px] rounded-md object-cover border border-slate-300"
                src="/images/admin.jpg"
                alt="Seller Profile"
              />
            </div>
          </div>

          {/* Right: Seller Information Panel */}
          <div className="w-full lg:w-9/12 px-0 lg:px-7 text-white">
            <div className="py-2 flex flex-col gap-2">
              <div className="flex gap-2 text-sm">
                <span className="font-bold">Basic Info</span>
              </div>

              <div className="flex justify-between text-sm bg-[#5c53df] p-4 rounded-md mb-3 flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold">Name: </span>Kazi Ariyan
                  </p>
                  <p>
                    <span className="font-semibold">Email: </span>
                    ariyan@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Role: </span>Seller
                  </p>
                  <p>
                    <span className="font-semibold">Status: </span>Pending
                  </p>
                  <p>
                    <span className="font-semibold">Payment Status: </span>
                    Inactive
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold">Shop Name: </span>Easy
                    E-Commerce
                  </p>
                  <p>
                    <span className="font-semibold">Division: </span>Dhaka
                  </p>
                  <p>
                    <span className="font-semibold">District: </span>Dhaka
                  </p>
                  <p>
                    <span className="font-semibold">State: </span>Mirpur
                  </p>
                </div>
              </div>
            </div>

            {/* Status Update Form */}
            <form onSubmit={submitStatus}>
              <div className="flex gap-4 py-3">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className="px-4 py-2 bg-[#5c53df] border border-slate-700 rounded-md text-white outline-none cursor-pointer"
                >
                  <option value="">-- Select Status --</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
                <button className="bg-red-500 w-[170px] hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
