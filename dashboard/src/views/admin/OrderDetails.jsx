import React, { useState } from 'react';

const OrderDetails = () => {
    const [status, setStatus] = useState('');

    return (
        <div className='px-2 lg:px-7 pt-5 min-h-screen bg-[#cdcae9]'>
            <div className='w-full p-4 bg-[#6d65e8] rounded-md text-white shadow-md'>

                {/* Header */}
                <div className='flex justify-between items-center p-4 border-b border-slate-600 mb-4'>
                    <h2 className='text-lg font-bold text-white'>Order Details</h2>
                    <select
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        className='px-4 py-2 bg-[#5c53df] border border-slate-600 rounded-md text-white outline-none cursor-pointer text-sm font-semibold'
                    >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="placed">Placed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>

                {/* Main Order Content */}
                <div className='p-4'>
                    {/* Top Row: Order ID & Date */}
                    <div className='flex justify-between items-center gap-2 text-slate-200 mb-4'>
                        <h2 className='text-base font-semibold'>#45829</h2>
                        <span className='text-sm'>3 Dec 2023</span>
                    </div>

                    <div className='flex flex-wrap text-white'>
                        {/* Left Column: Delivery & Shipping Address */}
                        <div className='w-full lg:w-4/12 pr-0 lg:pr-4 mb-6 lg:mb-0'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-slate-200 font-bold text-md'>Deliver To: Kazi Ariyan</h2>
                                <p className='text-sm text-slate-300'>
                                    <span className='bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded font-semibold mr-2'>Home</span>
                                    Dhaka, Mirpur-10, Block-C, House-12, Bangladesh
                                </p>
                            </div>

                            <div className='flex justify-start items-center gap-3 font-semibold text-sm mt-4 text-slate-200'>
                                <h2>Payment Status: </h2>
                                <span className='text-green-400 font-bold'>Paid</span>
                            </div>

                            <div className='flex justify-start items-center gap-3 font-semibold text-sm mt-2 text-slate-200'>
                                <h2>Price: </h2>
                                <span className='text-white font-bold'>$540</span>
                            </div>

                            {/* Ordered Items List */}
                            <div className='mt-4 flex flex-col gap-3'>
                                <div className='text-slate-200 font-bold text-md border-b border-slate-600 pb-2'>Order Items</div>

                                {[1, 2].map((p, i) => (
                                    <div key={i} className='flex gap-3 text-sm bg-[#5c53df] p-2 rounded-md items-center'>
                                        <img
                                            className='w-[55px] h-[55px] rounded-md object-cover border border-slate-400'
                                            src={`/images/category/${i + 1}.jpg`}
                                            alt="Product Thumbnail"
                                        />
                                        <div className='flex flex-col text-slate-200'>
                                            <h2 className='font-semibold text-white'>Long Sleeve T-Shirt</h2>
                                            <p>
                                                <span>Brand: </span>
                                                <span className='font-bold text-slate-100'>Easy </span>
                                                <span className='text-xs bg-indigo-600 px-1.5 py-0.5 rounded ml-2'>Qty: 2</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Multi-Vendor Sub-Orders Breakdown */}
                        <div className='w-full lg:w-8/12 pl-0 lg:pl-4'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-slate-200 font-bold text-md border-b border-slate-600 pb-2'>Seller Sub-Orders</h2>

                                {[1, 2].map((s, i) => (
                                    <div key={i} className='bg-[#5c53df] p-4 rounded-md flex flex-col gap-3'>
                                        <div className='flex justify-between items-center text-sm font-semibold border-b border-slate-600 pb-2'>
                                            <h2>Seller {i + 1} Order Status: <span className='text-yellow-300 capitalize'>pending</span></h2>
                                        </div>

                                        {/* Sub Order Products */}
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex gap-3 text-sm items-center'>
                                                <img
                                                    className='w-[50px] h-[50px] rounded-md object-cover border border-slate-400'
                                                    src={`/images/category/${i + 1}.jpg`}
                                                    alt="Sub Order Product"
                                                />
                                                <div className='flex flex-col text-slate-200'>
                                                    <h2 className='font-semibold text-white'>Men Casual Shirt</h2>
                                                    <p><span>Brand: </span><span className='font-bold text-slate-100'>Adidas</span></p>
                                                    <p><span>Price: </span><span className='text-green-300 font-bold'>$270</span> (Qty: 1)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderDetails;