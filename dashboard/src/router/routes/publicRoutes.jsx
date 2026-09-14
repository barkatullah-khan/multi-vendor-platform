import { lazy } from 'react';
import AdminLogin from '../../views/auth/AdminLogin';

// ../.. steps out of routes/ and router/ to reach src/views/auth/
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));
const Home =lazy(()=>import('../../views/Home'));
const UnAuthorized =lazy(()=>import('../../views/UnAuthorized'));


const publicRoutes = [
     {
        path:'/',
        element:<Home/>
       

    },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/admin/login',
    element: <AdminLogin/>
  },{
    path:'/unauthorized',
    element:<UnAuthorized/>
  }
];

export default publicRoutes;