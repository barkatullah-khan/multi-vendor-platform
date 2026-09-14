import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';
import { seller_register } from '../../store/Reducers/authReducer';
import toast from 'react-hot-toast';
import {  messageClear } from '../../store/Reducers/authReducer';
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader,successMessage,errorMessage } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    
    dispatch(seller_register(state));
  };

useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
      navigate('/')
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      // Reset form fields on successful registration
      setState({
        name: '',
        email: '',
        password: '',
      });
    }
  }, [successMessage, errorMessage, dispatch]);

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-87.5 text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-7 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
          <p className='text-sm mb-3 font-medium'>Please register your account to continue</p>

          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor="name">Name</label>
              <input 
                onChange={inputHandle} 
                value={state.name} 
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6]' 
                type="text" 
                name='name' 
                placeholder='Name' 
                id='name' 
                required 
              />
            </div>

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

            <div className='flex flex-col w-full gap-1 mb-3'>
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

            <div className='flex items-center w-full gap-3 mb-3'>
              <input 
                className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500' 
                type="checkbox" 
                name="checkbox" 
                id="checkbox" 
                required 
              />
              <label htmlFor="checkbox">I agree to privacy policy & terms</label>
            </div>

            <button 
              disabled={loader ? true : false} 
              className='bg-[#059473] w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 flex justify-center items-center'
            >
              {
                loader ? (
                  <PropagateLoader color='#fff' cssOverride={overrideStyle} />
                ) : (
                  'Sign up'
                )
              }
            </button>

            <div className='flex items-center mb-3 gap-3 justify-center'>
              <p>Already have an account? <Link className='font-bold' to='/login'>Sign In</Link></p>
            </div>

            <div className='w-full flex justify-center items-center mb-3'>
              <div className='w-[45%] bg-slate-700 h-px'></div>
              <div className='w-[10%] flex justify-center items-center'><span className='pb-1'>Or</span></div>
              <div className='w-[45%] bg-slate-700 h-px'></div>
            </div>

            <div className='flex justify-center items-center gap-3'>
              <div className='w-33.75 h-8.75 flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                <span><FaGoogle /></span>
              </div>
              <div className='w-33.75 h-8.75 flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                <span><FaFacebook /></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;