import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { jwtDecode } from 'jwt-decode';

// Helper function to decode token on initial state setup
const returnRole = (token) => {
    if (token && token !== 'undefined' && token !== 'null') {
        try {
            const decodeToken = jwtDecode(token);
            console.log(decodeToken)
            const expireTime = new Date(decodeToken.exp * 1000);
            if (new Date() > expireTime) {
                localStorage.removeItem('accessToken');
                return '';
            } else {
                return decodeToken.role;
            }
        } catch (error) {
            localStorage.removeItem('accessToken');
            return '';
        }
    } else {
        return '';
    }
};

// Async thunk for admin login API request
export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/admin-login', info, {
                withCredentials: true
            });
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for seller registration API request
export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            console.log(info)
            const { data } = await api.post('/seller-register', info, {
                withCredentials: true
            });
            // console.log("📥 Backend Response:", data);
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for seller login API request
export const seller_login = createAsyncThunk(
    'auth/seller_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/seller-login', info, {
                withCredentials: true
            });
            console.log(data)
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-user', {
                withCredentials: true
            });
            return fulfillWithValue(data);
        } catch (error) {
            // Safely use optional chaining so it doesn't throw a TypeError if error.response is missing
            return rejectWithValue(error.response?.data || { error: error.message });
        }
    }
);

// Async thunk for logout API request
export const logout = createAsyncThunk(
    'auth/logout',
    async ({ navigate, role }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/logout', { withCredentials: true });
            localStorage.removeItem('accessToken');
            if (role === 'admin') {
                navigate('/admin/login');
            } else {
                navigate('/login');
            }
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
        role: returnRole(localStorage.getItem('accessToken')),
        token: localStorage.getItem('accessToken') || ''
    },
    reducers: {
        messageClear: (state) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // Admin Login
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
            })
            .addCase(admin_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(admin_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
                state.userInfo = payload.userInfo;
            })
            // Seller Register
            .addCase(seller_register.pending, (state) => {
                state.loader = true;
            })
            .addCase(seller_register.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_register.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
                state.userInfo = payload.userInfo;
            })
            // Seller Login
            .addCase(seller_login.pending, (state) => {
                state.loader = true;
            })
            .addCase(seller_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
                state.userInfo = payload.userInfo;
            })

            //user_info
            .addCase(get_user_info.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.userInfo = payload.userInfo;
                state.role = payload.userInfo.role;
})
             // Add inside your builder:
.addCase(get_user_info.rejected, (state, { payload }) => {
    state.loader = false;
    state.userInfo = '';
    state.role = '';
    state.token = '';
})
            // Logout
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.userInfo = '';
                state.role = '';
                state.token = '';
                state.successMessage = payload.message;
            });
    }
});

export const { messageClear } = authSlice.actions;
export default authSlice.reducer;