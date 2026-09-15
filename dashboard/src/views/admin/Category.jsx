import React, { useState,useEffect } from "react";
import { FaEdit, FaTrash, FaImage } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';
import { categoryAdd,get_category,messageClear } from "../../store/Reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Search from "../components/Search";


const Category = () => {

  const dispatch = useDispatch();
  
  // Safe selector: checking lowercase 'category' (change to 'Category' if your store explicitly uses capital C)
  const { loader,successMessage,errorMessage } = useSelector(state => state.category || state.Category);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  const [state, setState] = useState({ name: "", image: "" });
  const [imageShow, setImageShow] = useState("");

  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImageShow(URL.createObjectURL(files[0]));
      setState({ ...state, image: files[0] });
    }
  };

  const add_category = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state));
  };

  useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            // Reset form fields after successful addition
            setState({
                name: '',
                image: ''
            });
            setImageShow('');
        }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
    }, [successMessage, errorMessage, dispatch]);

  useEffect(()=>{
     const obj={
      parPage:parseInt(parPage),
      page:parseInt(currentPage),
      searchValue

     }
     dispatch(get_category(obj))
  },[searchValue,currentPage,parPage])
  
  return (
    <div className="min-h-screen bg-[#cdcae9] p-5 text-white">
      {/* Main Content Layout */}
      <div className="flex flex-wrap w-full gap-y-6">
        {/* LEFT CARD: Table & Controls */}
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="bg-[#6d65e8] p-5 rounded-lg shadow-md">
            {/* Table Controls (Per Page & Search) */}
           <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue}/>

            {/* Category Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-white">
                <thead className="text-xs uppercase border-b border-[#827aee] text-slate-200">
                  <tr>
                    <th className="py-3 px-2">NO</th>
                    <th className="py-3 px-2">IMAGE</th>
                    <th className="py-3 px-2">NAME</th>
                    <th className="py-3 px-2">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <tr key={index} className="border-b border-[#7b73ed]/50">
                      <td className="py-3 px-2 font-medium">{index + 1}</td>
                      <td className="py-3 px-2">
                        <div className="w-[45px] h-[45px] bg-white rounded flex justify-center items-center overflow-hidden p-1">
                          <img
                            className="w-full h-full object-contain"
                            src={`/images/category/${index + 1}.jpg`}
                            alt="category item"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-2 font-medium text-slate-100">
                        Tshirt
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <button className="p-2 bg-[#ffb800] rounded hover:opacity-90 text-white">
                            <FaEdit size={12} />
                          </button>
                          <button className="p-2 bg-[#ff4d4d] rounded hover:opacity-90 text-white">
                            <FaTrash size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Circular Blue/Dark Pagination */}
            <div className="flex justify-end gap-2 mt-6 items-center">
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-semibold ${currentPage === 1 ? "bg-[#9eb5ff] text-slate-800" : "bg-[#4c42d3] text-white"}`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-semibold ${currentPage === 2 ? "bg-[#9eb5ff] text-slate-800" : "bg-[#4c42d3] text-white"}`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-semibold ${currentPage === 3 ? "bg-[#9eb5ff] text-slate-800" : "bg-[#4c42d3] text-white"}`}
              >
                3
              </button>
              <button className="w-8 h-8 rounded-full bg-white text-slate-700 flex justify-center items-center text-xs">
                <BsChevronDoubleRight />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Add Category Form */}
        <div className="w-full lg:w-5/12 lg:pl-3">
          <div className="bg-[#6d65e8] p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-center text-white">
              Add Category
            </h2>

            <form onSubmit={add_category}>
              {/* Category Name Input */}
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-sm text-slate-200" htmlFor="name">
                  Category Name
                </label>
                <input
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  className="px-3 py-2 bg-white text-slate-800 rounded outline-none placeholder-slate-400 text-sm"
                  type="text"
                  placeholder="Category Name"
                  id="name"
                  required
                />
              </div>

              {/* Image Box Area */}
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="flex justify-center items-center flex-col h-[210px] border border-dashed border-[#827aee] rounded cursor-pointer hover:border-white transition-all"
                >
                  {imageShow ? (
                    <img
                      className="w-full h-full object-cover rounded"
                      src={imageShow}
                      alt="preview"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-slate-200">
                      <FaImage className="text-xl" />
                      <span className="text-sm">Select Image</span>
                    </div>
                  )}
                </label>
                <input
                  onChange={imageHandle}
                  className="hidden"
                  type="file"
                  id="image"
                  accept="image/*"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                disabled={loader ? true : false}
                className="bg-[#059473] w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 flex justify-center items-center cursor-pointer"
              >
                {
                  loader ? (
                    <PropagateLoader color='#fff' cssOverride={overrideStyle} />
                  ) : (
                    'Add Category'
                  )
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;