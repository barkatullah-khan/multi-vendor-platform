import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const { role } = useSelector(state => state.auth);

    if (role === 'seller') {
        return <Navigate to="/seller/dashboard" replace />;
    } else if (role === 'admin') {
        return <Navigate to="/admin/dashboard" replace />;
    }else{
         return <Navigate to ='/login'/>

    }

    // If they are a customer or a guest, let them see the actual Home page content
    return (
        <div>
          
        </div>
    );
};

export default Home;