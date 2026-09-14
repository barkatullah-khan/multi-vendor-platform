import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { RiProductHuntLine } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

const SellerDashboard = () => {
    // ApexCharts options for the Sales Line Chart
    const state = {
        series: [
            {
                name: "Orders",
                data: [35, 45, 30, 50, 40, 60, 55, 70, 65, 80, 75, 90]
            },
            {
                name: "Revenue",
                data: [20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80]
            },
            {
                name: "Sales",
                data: [15, 25, 20, 35, 30, 45, 40, 55, 50, 65, 60, 75]
            }
        ],
        options: {
            color: ['#181ee8', '#5025d1'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: undefined,
                width: 3,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '400px'
                        }
                    }
                }
            ]
        }
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            {/* --- TOP METRIC CARDS --- */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 '>
                
                {/* Total Sales */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$3,450</h2>
                        <span className='text-md font-medium'>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg' />
                    </div>
                </div>

                {/* Products */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>15</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#e000e01f] flex justify-center items-center text-xl'>
                        <RiProductHuntLine className='text-[#e000e0] shadow-lg' />
                    </div>
                </div>

                {/* Orders */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>25</h2>
                        <span className='text-md font-medium'>Orders</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <FaShoppingCart className='text-[#00cfe8] shadow-lg' />
                    </div>
                </div>

                {/* Pending Orders */}
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>5</h2>
                        <span className='text-md font-medium'>Pending Orders</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <AiOutlineShopping className='text-[#7367f0] shadow-lg' />
                    </div>
                </div>
            </div>

            {/* --- CHARTS & MESSAGES SECTION --- */}
            <div className='w-full flex flex-wrap mt-7'>
                
                {/* Chart Section */}
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#283046] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                </div>

                {/* Customer / Admin Recent Messages */}
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                    <div className='w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Customer Messages</h2>
                            <Link to='/seller/dashboard/chat-customer' className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                        </div>

                        <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                            <ol className='relative border-1 border-slate-600 ml-4 border-l'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1 bg-[#00d1e848] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="/images/admin.jpg" alt="User" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Customer Name</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 days ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            Is this product still available?
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- RECENT ORDERS TABLE --- */}
            <div className='w-full p-4 bg-[#283046] rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                    <Link to='/seller/dashboard/orders' className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr key={i} className='border-b border-slate-700'>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>#64543{i}</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>$560</td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>Paid</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span className='bg-[#7367f01f] text-[#7367f0] text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>Pending</span>
                                    </td>
                                    <td className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link to={`/seller/dashboard/order/details/${i}`} className='p-[6px] bg-[#28c76f1f] text-[#28c76f] hover:shadow-lg hover:shadow-green-500/50 rounded'>View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;