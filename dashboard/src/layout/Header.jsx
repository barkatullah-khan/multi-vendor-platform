import React from "react";
import { FaList } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = ({ showSidebar, setShowSidebar }) => {
  // Connect user info from Redux store (or fallback values)
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 bg-[#cdcae9] transition-all">
      <div className="ml-0 lg:ml-65 rounded-md h-16.25 flex justify-between items-center bg-[#6d65e8] px-5 transition-all shadow-md">
        {/* Mobile Sidebar Toggle Icon */}
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-8.75 flex lg:hidden h-8.75 rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
        >
          <span>
            <FaList className="text-white" />
          </span>
        </div>

        {/* Top Search Field */}
        <div className="hidden md:block">
          <input
            className="px-3 py-2 outline-none border bg-[#5c53df] border-slate-700 rounded-md text-white focus:border-indigo-500 overflow-hidden placeholder-slate-300"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>

        {/* Right Profile Section */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center flex-col text-end">
              <h2 className="text-sm font-bold text-white leading-4">
                {userInfo?.name ? userInfo.name : "Kazi Ariyan"}
              </h2>
              <span className="text-[12px] w-full font-normal text-slate-200 capitalize">
                {userInfo?.role ? userInfo.role : "Admin"}
              </span>
            </div>

            {/* Profile Image */}
            {userInfo?.image ? (
              <img
                className="w-11.25 h-11.25 rounded-full overflow-hidden object-cover border border-slate-300"
                src={userInfo.image}
                alt="User"
              />
            ) : (
              <img
                className="w-11.25 h-11.25 rounded-full overflow-hidden object-cover border border-slate-300"
                src="/images/admin.jpg"
                alt="Admin Avatar"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
