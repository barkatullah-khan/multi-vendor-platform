import React from 'react';
import { privateRoutes } from './privateRoutes';
import MainLayout from '../../layout/MainLayout';
import ProtectRoute from './ProtectRoute';

export const getRoutes = () => {
    privateRoutes.map(r => {
        r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>;
        return r; // Always good practice to return inside map
    });

    // Return as an array of route groups
    return [
        {
            path: '/',
            element: <MainLayout />,
            children: privateRoutes
        }
    ];
};