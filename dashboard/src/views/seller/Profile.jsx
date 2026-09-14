import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const Profile = () => {
  const [imageShow, setImageShow] = useState("");
  const loader = false;

  const addImage = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageShow(URL.createObjectURL(file));
    }
  };

  return (
    <div className="px-2 lg:px-7 pt-5 min-h-[calc(100vh-80px)] bg-[#cdcae9]">
      <div className="w-full flex flex-wrap gap-6">
        {/* Left Side: Profile Info & Shop Details */}
        <div className="w-full lg:w-[calc(50%-12px)]">
          <div className="w-full bg-[#6f5fdf] p-4 rounded-md text-white shadow-md">
            {/* Profile Image & Upload */}
            <div className="flex justify-center items-center py-3">
              <div className="h-[150px] w-[200px] relative font-medium group cursor-pointer overflow-hidden rounded-md border border-[#5a4cb8] bg-[#6f5fdf] flex justify-center items-center">
                {imageShow ? (
                  <img
                    className="w-full h-full object-cover"
                    src={imageShow}
                    alt="Profile"
                  />
                ) : (
                  <label
                    htmlFor="img"
                    className="flex flex-col justify-center items-center cursor-pointer h-full w-full text-white"
                  >
                    <span>
                      <BsImages className="text-2xl" />
                    </span>
                    <span className="text-xs mt-1">Select Image</span>
                  </label>
                )}
                <input
                  onChange={addImage}
                  type="file"
                  id="img"
                  className="hidden"
                />

                {loader && (
                  <div className="bg-[#00000080] absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
                    <FadeLoader color="#fff" />
                  </div>
                )}
              </div>
            </div>

            {/* Basic Seller Details */}
            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between items-center text-white p-3 bg-[#6f5fdf] border border-[#5a4cb8] rounded-md relative font-medium">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex gap-2">
                    <span>Name:</span>
                    <span className="font-semibold text-white">John Doe</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Email:</span>
                    <span className="font-semibold text-white">seller@gmail.com</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Role:</span>
                    <span className="font-semibold text-white">Seller</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Status:</span>
                    <span className="bg-green-500/20 text-green-300 px-2 py-[1px] rounded-md text-xs font-bold">
                      Active
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span>Payment Account:</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-[1px] rounded-md text-xs font-bold cursor-pointer hover:underline">
                      Pending
                    </span>
                  </div>
                </div>

                <button className="p-[6px] bg-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/50 text-yellow-300 rounded absolute right-2 top-2">
                  <FaEdit />
                </button>
              </div>
            </div>

            {/* Shop Details Form */}
            <div className="px-0 md:px-5 py-2">
              <div className="bg-[#6f5fdf] p-4 rounded-md text-white border border-[#5a4cb8]">
                <h2 className="text-lg font-semibold pb-3 text-white">Shop Details</h2>
                <form>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="Shop">Shop Name</label>
                    <input
                      className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                      type="text"
                      placeholder="Shop name"
                      name="shopName"
                      id="Shop"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="division">Division</label>
                    <input
                      className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                      type="text"
                      placeholder="Division"
                      name="division"
                      id="division"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="district">District</label>
                    <input
                      className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                      type="text"
                      placeholder="District"
                      name="district"
                      id="district"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-4">
                    <label htmlFor="sub">Sub District</label>
                    <input
                      className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                      type="text"
                      placeholder="Sub District"
                      name="sub"
                      id="sub"
                    />
                  </div>

                  <button className="bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 font-semibold text-sm transition-all duration-300">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Change Password Form */}
        <div className="w-full lg:w-[calc(50%-12px)]">
          <div className="w-full bg-[#6f5fdf] p-4 rounded-md text-white shadow-md">
            <h1 className="text-white text-lg font-semibold mb-4">
              Change Password
            </h1>
            <form>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </div>

              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="old_password">Old Password</label>
                <input
                  className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                  type="password"
                  placeholder="Old password"
                  name="old_password"
                  id="old_password"
                />
              </div>

              <div className="flex flex-col w-full gap-1 mb-5">
                <label htmlFor="new_password">New Password</label>
                <input
                  className="px-4 py-2 focus:border-white outline-none bg-[#6f5fdf] border border-[#5a4cb8] rounded-md text-white placeholder-slate-200"
                  type="password"
                  placeholder="New password"
                  name="new_password"
                  id="new_password"
                />
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 font-semibold text-sm transition-all duration-300">
                Save Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;