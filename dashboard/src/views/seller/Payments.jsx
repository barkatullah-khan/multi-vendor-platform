import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';

const Payments = () => {
    const [amount, setAmount] = useState('');
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const sendRequest = (e) => {
        e.preventDefault();
        console.log('Request submitted:', amount);
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            {/* Top Metric Cards */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-2xl font-bold'>$5,800</h2>
                        <span className='text-sm font-normal'>Total Sales</span>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#7367f010] flex justify-center items-center text-xl text-[#7367f0]'>
                        <BsCurrencyDollar />
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#5de2ff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-2xl font-bold'>$1,200</h2>
                        <span className='text-sm font-normal'>Available Amount</span>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#28c76f10] flex justify-center items-center text-xl text-[#28c76f]'>
                        <BsCurrencyDollar />
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-2xl font-bold'>$450</h2>
                        <span className='text-sm font-normal'>Pending Amount</span>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#ea545510] flex justify-center items-center text-xl text-[#ea5455]'>
                        <BsCurrencyDollar />
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-2xl font-bold'>$0</h2>
                        <span className='text-sm font-normal'>Withdrawn Amount</span>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#00cfe810] flex justify-center items-center text-xl text-[#00cfe8]'>
                        <BsCurrencyDollar />
                    </div>
                </div>
            </div>

            {/* Withdrawal Request & History */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-7 pb-4'>
                {/* Left Side: Send Withdrawal Request Form & Pending Requests */}
                <div className='bg-[#6a5fdf] text-[#d0d2d6] rounded-md p-5'>
                    <h2 className='text-lg font-semibold pb-4 text-white'>Send Request</h2>
                    <form onSubmit={sendRequest}>
                        <div className='flex gap-3 flex-wrap md:flex-nowrap'>
                            <input 
                                min='0' 
                                type="number" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className='px-3 py-2 md:w-[79%] focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' 
                                name='amount' 
                                placeholder='Enter amount' 
                            />
                            <button className='bg-red-500 hover:shadow-red-500/50 hover:shadow-lg text-white rounded-md px-4 py-2 font-semibold text-sm'>
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className='pt-8'>
                        <h2 className='text-lg font-semibold pb-4 text-white'>Pending Request</h2>
                        <div className="w-full overflow-x-auto">
                            <div className="min-w-[340px]">
                                <div className="flex bg-[#6d65e8] uppercase text-xs font-bold text-white rounded-sm p-2 mb-2">
                                    <div className="w-[25%]">No</div>
                                    <div className="w-[25%]">Amount</div>
                                    <div className="w-[25%]">Status</div>
                                    <div className="w-[25%]">Date</div>
                                </div>
                                <div className="max-h-[350px] overflow-y-auto custom-scrollbar flex flex-col gap-2">
                                    {array.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex text-sm font-medium text-white items-center p-2 border-b border-[#6d65e8]"
                                        >
                                            <div className="w-[25%]">#{index + 1}</div>
                                            <div className="w-[25%]">$450</div>
                                            <div className="w-[25%]">
                                                <span className="py-0.5 px-2 bg-yellow-500/20 text-yellow-300 rounded-md text-xs">
                                                    pending
                                                </span>
                                            </div>
                                            <div className="w-[25%] text-xs">12 Jun 2024</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Successful Payment History */}
                <div className="bg-[#5c53df] p-5 rounded-md">
                    <h3 className="text-lg font-semibold mb-4 text-white">
                        Successful Payment
                    </h3>
                    <div className="w-full overflow-x-auto">
                        <div className="min-w-[340px]">
                            <div className="flex bg-[#6d65e8] uppercase text-xs font-bold text-white rounded-sm p-2 mb-2">
                                <div className="w-[25%]">No</div>
                                <div className="w-[25%]">Amount</div>
                                <div className="w-[25%]">Status</div>
                                <div className="w-[25%]">Date</div>
                            </div>
                            <div className="max-h-[350px] overflow-y-auto custom-scrollbar flex flex-col gap-2">
                                {array.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex text-sm font-medium text-white items-center p-2 border-b border-[#6d65e8]"
                                    >
                                        <div className="w-[25%]">#{index + 1}</div>
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
    );
};

export default Payments;