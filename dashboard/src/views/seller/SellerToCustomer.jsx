import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaList } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';

const SellerToCustomer = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [text, setText] = useState('');
    const [activeCustomer, setActiveCustomer] = useState(1);

    const customers = [
        { id: 1, name: 'John Doe', image: 'http://localhost:5173/images/demo.jpg', status: 'active', time: '2m ago' },
        { id: 2, name: 'Jane Smith', image: '', status: 'deactive', time: '1h ago' },
        { id: 3, name: 'Alex Johnson', image: '', status: 'active', time: '1d ago' },
    ];

    const messages = [
        { senderId: 1, text: 'Hello, is this item available in blue?', time: '10:00 AM' },
        { senderId: 'seller', text: 'Yes, we have blue items in stock!', time: '10:02 AM' },
        { senderId: 1, text: 'Great, how long does shipping take?', time: '10:05 AM' },
    ];

    const currentCustomer = customers.find((c) => c.id === activeCustomer) || customers[0];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        setText('');
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#6a5fdf] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    
                    {/* Customers Sidebar */}
                    <div className={`w-[280px] h-full absolute z-10 ${showSidebar ? 'left-0' : '-left-[330px]'} md:left-0 md:relative transition-all duration-300 bg-[#5c53df] md:bg-transparent pr-0 md:pr-4 rounded-md`}>
                        <div className='w-full h-full flex flex-col justify-between'>
                            <div className='flex flex-col h-full'>
                                {/* Header / Close Button */}
                                <div className='flex justify-between items-center text-white p-4 md:px-0 md:py-2'>
                                    <h2 className='text-lg font-semibold'>Customers</h2>
                                    <span 
                                        onClick={() => setShowSidebar(false)} 
                                        className='cursor-pointer text-xl block md:hidden'
                                    >
                                        <IoMdClose />
                                    </span>
                                </div>

                                {/* Customer Search */}
                                <div className='px-4 md:px-0 pb-3'>
                                    <input 
                                        type="text" 
                                        placeholder="Search customers..." 
                                        className="w-full px-3 py-2 border border-[#7f78e7] outline-none focus:border-white bg-[#5c53df] text-white rounded-md text-sm placeholder-slate-200"
                                    />
                                </div>

                                {/* Customer List */}
                                <div className='h-[calc(100vh-270px)] overflow-y-auto custom-scrollbar space-y-2 px-2 md:px-0'>
                                    {customers.map((c) => (
                                        <div 
                                            key={c.id} 
                                            onClick={() => setActiveCustomer(c.id)}
                                            className={`h-[60px] flex justify-start items-center gap-3 px-3 rounded-md cursor-pointer transition-all ${
                                                activeCustomer === c.id ? 'bg-[#4743e0]' : 'hover:bg-[#5c53df]'
                                            }`}
                                        >
                                            <div className='relative shrink-0'>
                                                {c.image ? (
                                                    <img 
                                                        src={c.image} 
                                                        alt={c.name} 
                                                        className='w-[38px] h-[38px] rounded-full object-cover border-2 border-white/20'
                                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                                    />
                                                ) : null}
                                                <div 
                                                    style={{ display: c.image ? 'none' : 'flex' }}
                                                    className='w-[38px] h-[38px] rounded-full bg-indigo-800 justify-center items-center text-white font-bold text-sm border-2 border-white/20'
                                                >
                                                    {c.name.charAt(0)}
                                                </div>
                                                {c.status === 'active' && (
                                                    <div className='w-[10px] h-[10px] bg-green-400 rounded-full absolute right-0 bottom-0 border-2 border-[#6a5fdf]'></div>
                                                )}
                                            </div>

                                            <div className='flex flex-col justify-center items-start text-white w-full'>
                                                <div className='flex justify-between items-center w-full'>
                                                    <h2 className='text-sm font-semibold'>{c.name}</h2>
                                                    <span className='text-[10px] text-slate-200'>{c.time}</span>
                                                </div>
                                                <span className='text-xs text-slate-200 truncate max-w-[150px]'>Click to open conversation</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Window - Dark Communication Panel */}
                    <div className='w-full md:w-[calc(100%-280px)] h-full flex flex-col justify-between bg-[#161d31] rounded-md'>
                        {/* Active Customer Header */}
                        <div className='flex justify-between items-center border-b border-slate-700 px-4 py-3'>
                            <div className='flex justify-start items-center gap-3'>
                                <div className='relative shrink-0'>
                                    {currentCustomer.image ? (
                                        <img 
                                            src={currentCustomer.image} 
                                            alt={currentCustomer.name} 
                                            className='w-[40px] h-[40px] rounded-full object-cover border-2 border-slate-600'
                                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                        />
                                    ) : null}
                                    <div 
                                        style={{ display: currentCustomer.image ? 'none' : 'flex' }}
                                        className='w-[40px] h-[40px] rounded-full bg-indigo-600 justify-center items-center text-white font-bold border-2 border-slate-600'
                                    >
                                        {currentCustomer.name.charAt(0)}
                                    </div>
                                    {currentCustomer.status === 'active' && (
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 border-2 border-[#161d31]'></div>
                                    )}
                                </div>
                                <div className='flex flex-col text-[#d0d2d6]'>
                                    <h2 className='text-base font-semibold'>{currentCustomer.name}</h2>
                                    <span className='text-xs text-green-400 capitalize'>{currentCustomer.status}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setShowSidebar(!showSidebar)}
                                className='w-[35px] h-[35px] rounded-sm flex justify-center items-center bg-indigo-500 text-white md:hidden'
                            >
                                <FaList />
                            </button>
                        </div>

                        {/* Messages Thread (Dark Background) */}
                       {/* Messages Thread */}
<div className='h-[calc(100%-130px)] overflow-y-auto custom-scrollbar p-4 space-y-4 bg-[#161d31]'>
    {messages.map((m, i) => (
        <div 
            key={i} 
            className={`w-full flex ${m.senderId === 'seller' ? 'justify-end' : 'justify-start'}`}
        >
            <div className='flex justify-start items-end gap-2 max-w-[85%] md:max-w-[70%]'>
                
                {/* Customer Avatar (Left side) */}
                {m.senderId !== 'seller' && (
                    <div className='shrink-0'>
                        {currentCustomer.image ? (
                            <img 
                                src={currentCustomer.image} 
                                alt="Customer" 
                                className='w-[30px] h-[30px] rounded-full object-cover'
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />
                        ) : null}
                        <div 
                            style={{ display: currentCustomer.image ? 'none' : 'flex' }}
                            className='w-[30px] h-[30px] rounded-full bg-slate-600 justify-center items-center text-white text-xs font-bold'
                        >
                            {currentCustomer.name.charAt(0)}
                        </div>
                    </div>
                )}

                {/* Message Bubble: Red for Seller, Dark Blue/Gray for Customer */}
                <div className={`p-3 rounded-md text-sm text-white ${
                    m.senderId === 'seller' 
                        ? 'bg-red-500 rounded-br-none' 
                        : 'bg-[#283046] rounded-bl-none'
                }`}>
                    <p>{m.text}</p>
                    <span className='text-[10px] text-slate-200 block text-right mt-1'>{m.time}</span>
                </div>

                {/* Red Seller Avatar (Right side) */}
                {m.senderId === 'seller' && (
                    <div className='shrink-0'>
                        <div className='w-[30px] h-[30px] rounded-full bg-red-500 flex justify-center items-center text-white text-xs font-bold'>
                            S
                        </div>
                    </div>
                )}

            </div>
        </div>
    ))}
</div>

                        {/* Message Input Form */}
                        <form onSubmit={handleSendMessage} className='flex gap-3 px-4 py-3 bg-[#283046] rounded-b-md items-center'>
                            <div className='relative flex justify-center items-center'>
                                <label htmlFor="file-input" className='w-[38px] h-[38px] rounded-full bg-slate-700 hover:bg-slate-600 flex justify-center items-center cursor-pointer text-[#d0d2d6]'>
                                    <AiOutlinePlus />
                                </label>
                                <input type="file" id="file-input" className="hidden" />
                            </div>

                            <input 
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                type="text" 
                                placeholder="Type a message..." 
                                className="w-full px-4 py-2 bg-[#161d31] border border-slate-700 focus:border-indigo-500 outline-none rounded-md text-[#d0d2d6] text-sm"
                            />

                            <button type="button" className="text-xl text-[#d0d2d6] hover:text-white px-1">
                                <BsEmojiSmile />
                            </button>

                            <button type="submit" className="w-[40px] h-[38px] bg-emerald-500 hover:bg-emerald-600 rounded-md flex justify-center items-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                                <RiSendPlaneFill />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SellerToCustomer;