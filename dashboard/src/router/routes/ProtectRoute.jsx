import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ route, children }) => {
    const { role, userInfo } = useSelector(state => state.auth);

    // 1. Check if the user is authenticated at all (has a role)
    if (role) {
        
        // 2. Check if the route requires a specific role layout match
        if (route.role) {
            if (userInfo.role === route.role) {
                
                // 3. Handle specific status checks for sellers (pending/deactive accounts)
                if (route.status) {
                    if (route.status === userInfo.status) {
                        return <Suspense fallback={null}>{children}</Suspense>;
                    } else {
                        if (userInfo.status === 'pending') {
                            return <Navigate to='/seller/account-pending' replace />;
                        } else if (userInfo.status === 'deactive') {
                            return <Navigate to='/seller/account-deactive' replace />;
                        }
                    }
                } else {
                    // If no strict status requirement, allow access
                    return <Suspense fallback={null}>{children}</Suspense>;
                }
            } else {
                // Role mismatch (e.g. seller trying to access admin route)
                return <Navigate to='/unauthorized' replace />;
            }
        } 
        
        // 4. Handle visibility rules (if a route allows specific statuses across roles)
        if (route.visibility) {
            if (route.visibility.some(r => r === userInfo.status)) {
                return <Suspense fallback={null}>{children}</Suspense>;
            } else {
                return <Navigate to='/unauthorized' replace />;
            }
        }else{
            if(route.ability==='seller'){
                return <Suspense fallback={null}>{children}</Suspense>;
            }
        }

        // Default fallback if no specialized role rules block it
        return <Suspense fallback={null}>{children}</Suspense>;

    } else {
        // Not logged in at all -> Send straight to login
        return <Navigate to='/login' replace />;
    }
};

export default ProtectRoute;