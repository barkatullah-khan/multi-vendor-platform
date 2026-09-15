import React, { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes/index';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_info } from './store/Reducers/authReducer';

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((prevState) => [...prevState, ...routes]); // ✅ Fixed with spread operator (...)
  }, []);

useEffect(() => {
    if (token) {
        dispatch(get_user_info());
    }
}, [token]);
  return <Router allRoutes={allRoutes} />;
};

export default App;