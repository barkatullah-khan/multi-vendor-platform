import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaList } from "react-icons/fa";

const SellerChat = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [text, setText] = useState("");

  // Dummy seller list for chat sidebar
  const sellers = [
    {
      id: 1,
      name: "Kazi Ariyan",
      image: "/images/category/1.jpg",
      status: "active",
    },
    {
      id: 2,
      name: "Sheikh Hasina",
      image: "/images/category/2.jpg",
      status: "deactive",
    },
    {
      id: 3,
      name: "Barkat Hossain",
      image: "/images/category/3.jpg",
      status: "active",
    },
  ];

  const activeSellerId = 1;

  return (
    <div className="px-2 lg:px-7 pt-5 min-h-screen bg-[#cdcae9]">
      <div className="w-full bg-[#6d65e8] px-4 py-4 rounded-md h-[calc(100vh-140px)] shadow-md">
        <div className="flex w-full h-full relative rounded-md overflow-hidden">
          {/* LEFT PANEL: Seller List Sidebar */}
          <div
            className={`w-[280px] h-full absolute lg:static z-30 transition-all ${
              showSidebar ? "left-0" : "-left-[280px]"
            } bg-[#5c53df] p-4 text-white rounded-l-md`}
          >
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="text-lg font-bold">Sellers</h2>
              <span
                onClick={() => setShowSidebar(false)}
                className="cursor-pointer text-xl p-1 bg-indigo-600 rounded-full"
              >
                <IoMdClose />
              </span>
            </div>

            {/* Sellers Search / Header */}
            <div className="hidden lg:block mb-3">
              <h2 className="text-lg font-bold text-white">Seller List</h2>
            </div>

            {/* Sellers Scrollable List */}
            <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100%-40px)] custom-scrollbar pr-1">
              {sellers.map((seller) => (
                <div
                  key={seller.id}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all ${
                    activeSellerId === seller.id
                      ? "bg-[#6d65e8]"
                      : "hover:bg-[#6d65e8]/50"
                  }`}
                >
                  <div className="relative">
                    <img
                      className="w-[42px] h-[42px] rounded-full object-cover border border-slate-300"
                      src={seller.image}
                      alt={seller.name}
                    />
                    <div
                      className={`w-[10px] h-[10px] rounded-full absolute bottom-0 right-0 border-2 border-[#5c53df] ${
                        seller.status === "active"
                          ? "bg-green-500"
                          : "bg-slate-400"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <h2 className="text-sm font-semibold text-white leading-4">
                      {seller.name}
                    </h2>
                    <span className="text-xs text-slate-200 capitalize">
                      {seller.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: Main Active Chat Window */}
          <div className="w-full lg:w-[calc(100%-280px)] h-full bg-gray-800 flex flex-col justify-between">
            {/* Chat Top Bar Header */}
            <div className="flex items-center justify-between p-3 bg-[#5c53df] border-b border-[#6d65e8]">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="w-[35px] h-[35px] rounded-sm bg-indigo-500 flex lg:hidden justify-center items-center cursor-pointer text-white"
                >
                  <FaList />
                </div>

                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] rounded-full object-cover border border-slate-300"
                    src="/images/category/1.jpg"
                    alt="Active Seller"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0 border-2 border-[#5c53df]"></div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-sm font-bold text-white leading-4">
                    Kazi Ariyan
                  </h2>
                  <span className="text-xs text-green-300">Online</span>
                </div>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="p-4 overflow-y-auto flex flex-col gap-3 h-[calc(100%-120px)] custom-scrollbar">
              {/* Seller Message (Left Aligned) */}
              <div className="flex items-start gap-2 max-w-[80%]">
                <img
                  className="w-[32px] h-[32px] rounded-full object-cover"
                  src="/images/category/1.jpg"
                  alt="Seller"
                />
                <div className="bg-[#5c53df] text-white p-3 rounded-lg text-sm rounded-tl-none">
                  Hello Admin, I have a question regarding my recent payment
                  withdrawal request.
                </div>
              </div>

              {/* Admin Message (Right Aligned) */}
              <div className="flex items-start gap-2 max-w-[80%] self-end flex-row-reverse">
                <img
                  className="w-[32px] h-[32px] rounded-full object-cover"
                  src="/images/admin.jpg"
                  alt="Admin"
                />
                <div className="bg-red-400 text-white p-3 rounded-lg text-sm rounded-tr-none">
                  Hi Ariyan! Your withdrawal request has been received and is
                  currently being processed by finance.
                </div>
              </div>
            </div>

            {/* Chat Input Field Bar */}
            <form className="p-3 bg-[#5c53df] flex items-center gap-2 border-t border-[#6d65e8]">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-[#4942c7] border border-slate-600 rounded-md text-white outline-none placeholder-slate-300 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm font-semibold transition-all shadow-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerChat;
