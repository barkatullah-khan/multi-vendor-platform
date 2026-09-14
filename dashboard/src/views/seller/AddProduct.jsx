import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsImages } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';

const AddProduct = () => {
    const categorys = [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'T-Shirt' },
        { id: 3, name: 'Mobile' },
        { id: 4, name: 'Computer' },
        { id: 5, name: 'Watch' },
        { id: 6, name: 'Pants' }
    ];

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: ''
    });

    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState(categorys);
    const [searchValue, setSearchValue] = useState('');

    // Image Upload States
    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState([]);

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
            setAllCategory(categorys.filter(c => c.name.toLowerCase().includes(value.toLowerCase())));
        } else {
            setAllCategory(categorys);
        }
    };

    const imageHandle = (e) => {
        const files = e.target.files;
        const length = files.length;

        if (length > 0) {
            setImages([...images, ...files]);
            let imageUrl = [];
            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) });
            }
            setImageShow([...imageShow, ...imageUrl]);
        }
    };

    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow;
            let tempImages = images;

            tempImages[index] = img;
            tempUrl[index] = { url: URL.createObjectURL(img) };
            setImageShow([...tempUrl]);
            setImages([...tempImages]);
        }
    };

    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i);
        const filterUrl = imageShow.filter((img, index) => index !== i);
        setImages(filterImage);
        setImageShow(filterUrl);
    };

    const add = (e) => {
        e.preventDefault();
        console.log(state, category, images);
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product</h1>
                    <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2' to='/seller/dashboard/products'>
                        Products
                    </Link>
                </div>

                <div>
                    <form onSubmit={add}>
                        {/* Name & Brand */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product Name</label>
                                <input
                                    className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                    onChange={inputHandle}
                                    value={state.name}
                                    type="text"
                                    placeholder='product name'
                                    name='name'
                                    id='name'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product Brand</label>
                                <input
                                    className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                    onChange={inputHandle}
                                    value={state.brand}
                                    type="text"
                                    placeholder='product brand'
                                    name='brand'
                                    id='brand'
                                />
                            </div>
                        </div>

                        {/* Category & Stock */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input
                                    readOnly
                                    onClick={() => setCateShow(!cateShow)}
                                    className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none cursor-pointer'
                                    value={category}
                                    type="text"
                                    placeholder='--select category--'
                                    id='category'
                                />
                                <div className={`absolute top-[101%] bg-[#283046] w-full border border-slate-700 rounded-md transition-all ${cateShow ? 'scale-100 opacity-100 z-50' : 'scale-0 opacity-0'}`}>
                                    <div className='w-full px-4 py-2 fixed z-50'>
                                        <input
                                            value={searchValue}
                                            onChange={categorySearch}
                                            className='px-3 py-1 bg-[#161d31] border border-slate-700 w-full rounded-md text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                            type="text"
                                            placeholder='search category'
                                        />
                                    </div>
                                    <div className='pt-14 px-4 pb-2 max-h-[200px] overflow-y-auto flex flex-col gap-1'>
                                        {allCategory.map((c, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 rounded-sm hover:bg-indigo-500 hover:text-white cursor-pointer ${category === c.name && 'bg-indigo-500'}`}
                                                onClick={() => {
                                                    setCategory(c.name);
                                                    setCateShow(false);
                                                    setSearchValue('');
                                                    setAllCategory(categorys);
                                                }}
                                            >
                                                {c.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="stock">Stock</label>
                                <input
                                    className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                    onChange={inputHandle}
                                    value={state.stock}
                                    type="number"
                                    min='0'
                                    placeholder='product stock'
                                    name='stock'
                                    id='stock'
                                />
                            </div>
                        </div>

                        {/* Price & Discount */}
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price ($)</label>
                                <input
                                    className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                    onChange={inputHandle}
                                    value={state.price}
                                    type="number"
                                    placeholder='price'
                                    name='price'
                                    id='price'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">Discount (%)</label>
                                <input
                                    className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                    onChange={inputHandle}
                                    value={state.discount}
                                    type="number"
                                    placeholder='% discount'
                                    name='discount'
                                    id='discount'
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='flex flex-col w-full gap-1 text-[#d0d2d6] mb-5'>
                            <label htmlFor="description">Description</label>
                            <textarea
                                rows={4}
                                className='px-[#161d31] border border-slate-700 bg-[#283046] rounded-md px-3 py-2 text-[#d0d2d6] focus:border-indigo-500 outline-none'
                                onChange={inputHandle}
                                value={state.description}
                                placeholder='description'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>

                        {/* Image Upload Grid */}
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4'>
                            {imageShow.map((img, i) => (
                                <div key={i} className='h-[180px] relative border border-slate-700 rounded-md overflow-hidden group'>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full object-cover cursor-pointer' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(e.target.files[0], i)} type="file" id={i} className='hidden' />
                                    <span onClick={() => removeImage(i)} className='p-2 z-10 cursor-pointer bg-[#283046] hover:text-red-500 text-white absolute top-1 right-1 rounded-full'>
                                        <IoMdCloseCircle className='text-lg' />
                                    </span>
                                </div>
                            ))}

                            <label className='flex flex-col justify-center items-center h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 border-slate-700 text-[#d0d2d6] rounded-md' htmlFor="image">
                                <span><BsImages className='text-2xl' /></span>
                                <span>select image</span>
                            </label>
                            <input multiple onChange={imageHandle} className='hidden' type="file" id="image" />
                        </div>

                        {/* Submit Button */}
                        <div className='flex'>
                            <button className='bg-red-500 hover:shadow-red-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2 font-semibold'>
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;