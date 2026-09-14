import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Pagination from '../Pagination';

const SellerRequest = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);

    return (
        <div className='px-2 lg:px-7 pt-5 min-h-screen bg-[#cdcae9]'>
            <div className='w-full p-4 bg-[#6d65e8] rounded-md text-white shadow-md'>
                <h2 className='text-xl font-bold mb-4 text-white'>Seller Requests</h2>

                {/* Top Controls */}
                <div className='flex justify-between items-center mb-4'>
                    <select 
                        value={parPage}
                        onChange={(e) => setParPage(parseInt(e.target.value))}
                        className='px-4 py-2 bg-[#5c53df] border border-slate-700 rounded-md text-white outline-none cursor-pointer'
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>

                    <input 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='px-4 py-2 bg-[#5c53df] border border-slate-700 rounded-md text-white outline-none placeholder-slate-300' 
                        type="text" 
                        placeholder='search' 
                    />
                </div>

                {/* Seller Requests Table */}
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-white'>
                        <thead className='text-xs uppercase border-b border-slate-700 text-slate-200'>
                            <tr>
                                <th scope="col" className='py-3 px-4'>No</th>
                                <th scope="col" className='py-3 px-4'>Name</th>
                                <th scope="col" className='py-3 px-4'>Email</th>
                                <th scope="col" className='py-3 px-4'>Payment Status</th>
                                <th scope="col" className='py-3 px-4'>Status</th>
                                <th scope="col" className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr key={i} className='border-b border-slate-700'>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>Kazi Ariyan</td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>ariyan@gmail.com</td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>
                                        <span className='bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs font-semibold'>
                                            inactive
                                        </span>
                                    </td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>
                                        <span className='bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-semibold'>
                                            pending
                                        </span>
                                    </td>
                                    <td className='py-2 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex items-center gap-2'>
                                            {/* LINK TO SELLER DETAILS PAGE */}
                                            <Link 
                                                to={`/admin/dashboard/seller/details/${i + 1}`} 
                                                className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 text-white flex justify-center items-center'
                                            >
                                                <FaEye />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className='w-full flex justify-end mt-4'>
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

export default SellerRequest;