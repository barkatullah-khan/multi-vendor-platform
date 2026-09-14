import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { productId } = useParams();

    const categories = [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'T-Shirt' },
        { id: 3, name: 'Mobile' },
        { id: 4, name: 'Computer' },
        { id: 5, name: 'Watch' }
    ];

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: ''
    });

    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState(categories);
    const [cateShow, setCateShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const [imageShow, setImageShow] = useState([]);
    const [images, setImages] = useState([]);

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value) {
            setAllCategory(categories.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1));
        } else {
            setAllCategory(categories);
        }
    };

    // Pre-populate mock product data based on URL parameter
    useEffect(() => {
        setState({
            name: 'Men Sports Shoes',
            description: 'High quality running shoes with maximum comfort and support.',
            discount: 10,
            price: 120,
            brand: 'Nike',
            stock: 25
        });
        setCategory('Sports');
        setImageShow([
            '/images/category/1.jpg',
            '/images/category/2.jpg'
        ]);
    }, [productId]);

    const changeImage = (img, files) => {
        if (files.length > 0) {
            console.log(img);
            console.log(files[0]);
        }
    };

    const update = (e) => {
        e.preventDefault();
        console.log({ ...state, category, productId });
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Edit Product</h1>
                    <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2' to='/seller/dashboard/products'>Products</Link>
                </div>

                <div>
                    <form onSubmit={update}>
                        {/* Name & Brand */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product Name</label>
                                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" placeholder='product name' name='name' id='name' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product Brand</label>
                                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.brand} type="text" placeholder='product brand' name='brand' id='brand' />
                            </div>
                        </div>

                        {/* Category & Stock */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input readOnly onClick={() => setCateShow(!cateShow)} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] cursor-pointer' value={category} type="text" placeholder='--select category--' id='category' />
                                
                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed font-[#283046]'>
                                        <input value={searchValue} onChange={categorySearch} className='px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='search' />
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex flex-col h-[200px] overflow-x-scroll'>
                                        {allCategory.map((c, i) => (
                                            <span key={i} className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={() => {
                                                setCateShow(false);
                                                setCategory(c.name);
                                                setSearchValue('');
                                                setAllCategory(categories);
                                            }}>{c.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="stock">Stock</label>
                                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.stock} type="number" placeholder='product stock' name='stock' id='stock' />
                            </div>
                        </div>

                        {/* Price & Discount */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.price} type="number" placeholder='price' name='price' id='price' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">Discount (%)</label>
                                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.discount} type="number" placeholder='%discount%' name='discount' id='discount' />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='flex flex-col w-full gap-1 mb-5 text-[#d0d2d6]'>
                            <label htmlFor="description">Description</label>
                            <textarea rows={4} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.description} placeholder='description' name='description' id='description'></textarea>
                        </div>

                        {/* Existing Images Display */}
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4'>
                            {imageShow && imageShow.length > 0 && imageShow.map((img, i) => (
                                <div key={i} className='h-[180px] relative'>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full rounded-sm object-cover' src={img} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className='hidden' />
                                </div>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className='flex'>
                            <button className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;