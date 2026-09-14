import React from 'react';
import { 
    AiOutlineDashboard, 
    AiOutlineShopping, 
    AiOutlinePlusCircle 
} from 'react-icons/ai';
import { BiCartAlt, BiCategory, BiLoaderCircle } from 'react-icons/bi';
import { BsChat, BsFillGearFill, BsChatDots, BsCartCheck } from 'react-icons/bs';
import { MdPayment, MdOutlineDiscount } from 'react-icons/md';
import { FaUsers, FaUserTimes } from 'react-icons/fa';

export const allNav = [
    // ================= ADMIN NAV ITEMS =================
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <BsCartCheck />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FaUsers />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUserTimes />,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <BiLoaderCircle />,
        role: 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <BsChat />,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },

    // ================= SELLER NAV ITEMS =================
    {
        id: 9,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <AiOutlinePlusCircle />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <AiOutlineShopping />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 12,
        title: 'Discount Products',
        icon: <MdOutlineDiscount />,
        role: 'seller',
        path: '/seller/dashboard/discount-products'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <BiCartAlt />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <MdPayment />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat Customer',
        icon: <BsChatDots />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Chat Support',
        icon: <BsChatDots />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Profile',
        icon: <BsFillGearFill />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    }
];