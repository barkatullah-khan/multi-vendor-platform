import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import toast from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Extract auth state from Redux store
  const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    console.log('Submitted State:', state);
  };

  // Handle toasts and clear messages
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate('/'); // Fixed capital N bug to navigate properly
    }
  }, [errorMessage, successMessage, dispatch, navigate]);

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-87.5 text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-7 rounded-md'>
          <div className='h-17.5 flex justify-center items-center'>
            <div className='w-45 h-12.5'>
              <img className='w-full h-full' src="/images/logo.png" alt="logo" />
            </div>
          </div>

          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor="email">Email</label>
              <input 
                onChange={inputHandle} 
                value={state.email} 
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6]' 
                type="email" 
                name='email' 
                placeholder='Email' 
                id='email' 
                required 
              />
            </div>

            <div className='flex flex-col w-full gap-1 mb-5'>
              <label htmlFor="password">Password</label>
              <input 
                onChange={inputHandle} 
                value={state.password} 
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6]' 
                type="password" 
                name='password' 
                placeholder='Password' 
                id='password' 
                required 
              />
            </div>

            <button 
              disabled={loader ? true : false} 
              className='bg-[#059473] w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 flex justify-center items-center'
            >
              {
                loader ? <PropagateLoader color='#fff' cssOverride={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '24px' }} /> : 'Login'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;