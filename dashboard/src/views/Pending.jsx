import React from 'react';
import { Link } from 'react-router-dom';

const Pending = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
            <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
                <div className="text-yellow-500 text-5xl mb-4">⏳</div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Account Pending Approval</h1>
                <p className="text-slate-600 mb-6">
                    Your seller account has been successfully created, but it is currently pending review by the admin. Please check back later.
                </p>
                <Link 
                    to="/login" 
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
};

export default Pending;