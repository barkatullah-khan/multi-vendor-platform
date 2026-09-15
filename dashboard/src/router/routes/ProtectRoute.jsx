import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ route, children }) => {
    const { role, userInfo, loader } = useSelector(state => state.auth);

    // If Redux slice is flagged as loading, show session loader
    if (loader) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#cdcae9] text-white">
                <h2>Loading session...</h2>
            </div>
        );
    }

    // 1. Check if the user is authenticated at all
    if (role) {
        // 2. Check role layout match
        if (route.role) {
            // Compare against Redux state 'role' instead of empty userInfo on reload
            if (role === route.role) {
                // 3. Status checks for sellers
                if (route.status) {
                    // Make sure userInfo has populated before reading status properties
                    if (userInfo && userInfo.status) {
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
                        // User info is still fetching right after a hard refresh, show a brief loader
                        return (
                            <div className="flex justify-center items-center h-screen bg-[#cdcae9] text-white">
                                <h2 className="text-lg font-semibold">Loading user data...</h2>
                            </div>
                        );
                    }
                } else {
                    return <Suspense fallback={null}>{children}</Suspense>;
                }
            } else {
                return <Navigate to='/unauthorized' replace />;
            }
        } 
        
        if (route.visibility) {
            if (userInfo && route.visibility.some(r => r === userInfo.status)) {
                return <Suspense fallback={null}>{children}</Suspense>;
            } else {
                return <Navigate to='/unauthorized' replace />;
            }
        }

        if (route.ability) {
            if (role === route.ability || route.ability === 'seller') {
                return <Suspense fallback={null}>{children}</Suspense>;
            }
        }

        return <Suspense fallback={null}>{children}</Suspense>;

    } else {
        return <Navigate to='/login' replace />;
    }
};

export default ProtectRoute;