import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Async Thunk: Get Seller Details
export const get_seller_info = createAsyncThunk(
    'seller/get_seller_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/seller-info', { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const sellerReducer = createSlice({
    name: 'seller',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: {}
    },
    reducers: {
        messageClear: (state) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_seller_info.fulfilled, (state, { payload }) => {
            state.userInfo = payload.userInfo;
        });
    }
});

export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;