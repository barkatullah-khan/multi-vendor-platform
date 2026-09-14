import React, { useState } from "react";

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="px-2 lg:px-7 pt-5 min-h-screen bg-[#cdcae9]">
      <div className="w-full p-4 bg-[#6d65e8] rounded-md text-white shadow-md">
        <h2 className="text-xl font-bold mb-5 text-white">
          Withdrawal Request
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT PANEL: Pending Requests */}
          <div className="bg-[#5c53df] p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Pending Request
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="min-w-112.5">
                <div className="flex bg-[#6d65e8] uppercase text-xs font-bold text-white rounded-sm p-2 mb-2">
                  <div className="w-[20%]">No</div>
                  <div className="w-[20%]">Amount</div>
                  <div className="w-[20%]">Status</div>
                  <div className="w-[20%]">Date</div>
                  <div className="w-[20%]">Action</div>
                </div>
                <div className="max-h-95 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                  {array.map((item, index) => (
                    <div
                      key={index}
                      className="flex text-sm font-medium text-white items-center p-2 border-b border-[#6d65e8]"
                    >
                      <div className="w-[20%]">{index + 1}</div>
                      <div className="w-[20%]">$450</div>
                      <div className="w-[20%]">
                        <span className="py-0.5 px-2 bg-yellow-500/20 text-yellow-300 rounded-md text-xs">
                          pending
                        </span>
                      </div>
                      <div className="w-[20%] text-xs">12 Jun 2024</div>
                      <div className="w-[20%]">
                        <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-1 cursor-pointer text-white rounded-sm text-xs">
                          Confirm
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Successful Payments */}
          <div className="bg-[#5c53df] p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Successful Payment
            </h3>
            <div className="w-full overflow-x-auto">
              <div className="min-w-100">
                <div className="flex bg-[#6d65e8] uppercase text-xs font-bold text-white rounded-sm p-2 mb-2">
                  <div className="w-[25%]">No</div>
                  <div className="w-[25%]">Amount</div>
                  <div className="w-[25%]">Status</div>
                  <div className="w-[25%]">Date</div>
                </div>
                <div className="max-h-95 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                  {array.map((item, index) => (
                    <div
                      key={index}
                      className="flex text-sm font-medium text-white items-center p-2 border-b border-[#6d65e8]"
                    >
                      <div className="w-[25%]">{index + 1}</div>
                      <div className="w-[25%]">$1200</div>
                      <div className="w-[25%]">
                        <span className="py-0.5 px-2 bg-green-500/20 text-green-300 rounded-md text-xs">
                          success
                        </span>
                      </div>
                      <div className="w-[25%] text-xs">10 May 2024</div>
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

export default PaymentRequest;
