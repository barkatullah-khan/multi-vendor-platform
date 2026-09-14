import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';
import Search from '../components/Search';
import Pagination from '../Pagination';

// Offline fallback image constant
const PLACEHOLDER_SVG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45"><rect width="100%" height="100%" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="10">IMG</text></svg>';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                {/* Search & Per Page Control */}
                <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                {/* Products Table */}
                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-[#d0d2d6] uppercase border-b border-slate-700 text-xs bg-[#161d31]'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr key={i} className='border-b border-slate-700 hover:bg-[#161d31]/50 transition-all'>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>{d}</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <img 
                                            className='w-[45px] h-[45px] rounded-md object-cover' 
                                            src={`/images/category/${d}.jpg`} 
                                            alt="product" 
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.src = PLACEHOLDER_SVG;
                                            }}
                                        />
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Men's Casual Sports Shoes...</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Sports</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>Nike</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>$120</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>10%</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>25</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <Link 
                                                to={`/seller/dashboard/edit-product/${d}`} 
                                                className='p-[6px] bg-yellow-500/10 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded transition-all'
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <Link 
                                                to={`/seller/dashboard/add-banner/${d}`} 
                                                className='p-[6px] bg-green-500/10 hover:bg-green-500 hover:text-white text-green-500 rounded transition-all'
                                                title="Add Banner"
                                            >
                                                <BsImages />
                                            </Link>
                                            <Link 
                                                to={`/seller/dashboard/product/details/${d}`} 
                                                className='p-[6px] bg-blue-500/10 hover:bg-blue-500 hover:text-white text-blue-500 rounded transition-all'
                                                title="View"
                                            >
                                                <FaEye />
                                            </Link>
                                            <button 
                                                onClick={() => console.log('Delete product', d)} 
                                                className='p-[6px] bg-red-500/10 hover:bg-red-500 hover:text-white text-red-500 rounded transition-all'
                                                title="Delete"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
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

export default Products;