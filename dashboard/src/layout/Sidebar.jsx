import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getNav } from '../navigation/index';
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../store/Reducers/authReducer';
import logo from '../assets/images/logo.png';

const Sidebar = ({ showSidebar, setShowSidebar }) => {

    const dispatch = useDispatch();
    const { role } = useSelector(state => state.auth); // Dynamically loads 'admin' or 'seller'
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const [allNav, setAllNav] = useState([]);
    console.log("Current Redux Role:", role); // Check your browser console

  useEffect(() => {
    // Use the dynamic role from Redux instead of hardcoding 'seller'
    const navs = getNav(role); 
    setAllNav(navs);
}, [role]);

    return (
        <div>
            {/* Mobile Overlay Backdrop */}
            <div 
                onClick={() => setShowSidebar(false)} 
                className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#8cbce780] top-0 left-0 z-10`}
            ></div>

            {/* Sidebar Container - Color matching screenshot: bg-[#e6e7fb] */}
            <div className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
                
                {/* Logo Section */}
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img className='w-full h-full object-contain' src={logo} alt="EASY SHOP" />
                    </Link> 
                </div>

                {/* Navigation Links */}
                <div className='px-[16px]'>
                    <ul>
                        {
                            allNav.map((n, i) => (
                                <li key={i}>
                                    <Link 
                                        to={n.path} 
                                        className={`${
                                            pathname === n.path 
                                                ? 'bg-[#0052cc] text-white shadow-indigo-500/30' 
                                                : 'text-[#030811] font-bold duration-200 hover:pl-4'
                                        } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] transition-all w-full mb-1 text-[15px]`}
                                    >
                                        <span className='text-lg'>{n.icon}</span>
                                        <span>{n.title}</span>
                                    </Link>
                                </li>
                            ))
                        }

                        {/* Logout Button */}
                        <li>
                            <button 
                                onClick={() => dispatch(logout({ navigate, role }))} 
                                className='text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 text-[15px]'
                            >
                                <span className='text-lg'><BiLogOutCircle /></span>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;