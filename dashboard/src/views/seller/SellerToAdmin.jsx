import React, { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';

const SellerToAdmin = () => {
    const [text, setText] = useState('');

    const adminInfo = {
        name: 'Admin Support',
        image: 'http://localhost:5173/images/admin.jpg',
        status: 'online'
    };

    const sellerInfo = {
        image: 'http://localhost:5173/images/seller.jpg'
    };

    const messages = [
        { senderId: 'admin', text: 'Welcome to support! How can we help you today?', time: '09:00 AM' },
        { senderId: 'seller', text: 'Hi, I have a question regarding my payout status.', time: '09:05 AM' },
        { senderId: 'admin', text: 'Sure, please share your withdrawal request ID.', time: '09:07 AM' },
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        setText('');
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#283046] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    
                    {/* Chat Window */}
                    <div className='w-full h-full flex flex-col justify-between bg-[#161d31] rounded-md'>
                        {/* Admin Support Header */}
                        <div className='flex justify-between items-center border-b border-slate-700 px-4 py-3'>
                            <div className='flex justify-start items-center gap-3'>
                                <div className='relative shrink-0'>
                                    {adminInfo.image ? (
                                        <img 
                                            src={adminInfo.image} 
                                            alt="Admin Avatar" 
                                            className='w-[40px] h-[40px] rounded-full object-cover border-2 border-red-500'
                                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                        />
                                    ) : null}
                                    <div 
                                        style={{ display: adminInfo.image ? 'none' : 'flex' }}
                                        className='w-[40px] h-[40px] rounded-full bg-slate-600 justify-center items-center text-white font-bold border-2 border-slate-500'
                                    >
                                        A
                                    </div>
                                    <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 border-2 border-[#161d31]'></div>
                                </div>
                                <div className='flex flex-col text-[#d0d2d6]'>
                                    <h2 className='text-base font-semibold'>{adminInfo.name}</h2>
                                    <span className='text-xs text-green-400 capitalize'>{adminInfo.status}</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Thread */}
                        <div className='h-[calc(100%-130px)] overflow-y-auto custom-scrollbar p-4 space-y-4 bg-[#161d31]'>
                            {messages.map((m, i) => (
                                <div 
                                    key={i} 
                                    className={`w-full flex ${m.senderId === 'seller' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className='flex justify-start items-end gap-2 max-w-[85%] md:max-w-[70%]'>
                                        {m.senderId === 'admin' && (
                                            <div className='shrink-0'>
                                                {adminInfo.image ? (
                                                    <img 
                                                        src={adminInfo.image} 
                                                        alt="Admin" 
                                                        className='w-[30px] h-[30px] rounded-full object-cover'
                                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                                    />
                                                ) : null}
                                                <div 
                                                    style={{ display: adminInfo.image ? 'none' : 'flex' }}
                                                    className='w-[30px] h-[30px] rounded-full bg-slate-600 justify-center items-center text-white text-xs font-bold'
                                                >
                                                    A
                                                </div>
                                            </div>
                                        )}

                                        {/* Seller message in Red, Admin message in dark background */}
                                        <div className={`p-3 rounded-md text-sm text-white ${
                                            m.senderId === 'seller' 
                                                ? 'bg-red-500 rounded-br-none' 
                                                : 'bg-[#283046] rounded-bl-none'
                                        }`}>
                                            <p>{m.text}</p>
                                            <span className='text-[10px] text-slate-200 block text-right mt-1'>{m.time}</span>
                                        </div>

                                        {m.senderId === 'seller' && (
                                            <div className='shrink-0'>
                                                {sellerInfo.image ? (
                                                    <img 
                                                        src={sellerInfo.image} 
                                                        alt="Seller" 
                                                        className='w-[30px] h-[30px] rounded-full object-cover border border-red-500'
                                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                                    />
                                                ) : null}
                                                <div 
                                                    style={{ display: sellerInfo.image ? 'none' : 'flex' }}
                                                    className='w-[30px] h-[30px] rounded-full bg-red-500 justify-center items-center text-white text-xs font-bold'
                                                >
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
                                <label htmlFor="admin-file-input" className='w-[38px] h-[38px] rounded-full bg-slate-700 hover:bg-slate-600 flex justify-center items-center cursor-pointer text-[#d0d2d6]'>
                                    <AiOutlinePlus />
                                </label>
                                <input type="file" id="admin-file-input" className="hidden" />
                            </div>

                            <input 
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                type="text" 
                                placeholder="Message Admin..." 
                                className="w-full px-4 py-2 bg-[#161d31] border border-slate-700 focus:border-red-500 outline-none rounded-md text-[#d0d2d6] text-sm"
                            />

                            <button type="button" className="text-xl text-[#d0d2d6] hover:text-white px-1">
                                <BsEmojiSmile />
                            </button>

                            {/* Green Send Button */}
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

export default SellerToAdmin;