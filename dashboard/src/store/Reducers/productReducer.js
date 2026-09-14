import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Base URL (adjust port to match your backend)
const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Async Thunk: Add Product
export const add_product = createAsyncThunk(
    'product/add_product',
    async (productData, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/product-add', productData, { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async Thunk: Get Products
export const get_products = createAsyncThunk(
    'product/get_products',
    async ({ searchValue, parPage, page }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/products-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`, { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const productReducer = createSlice({
    name: 'product',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        products: [],
        totalProduct: 0,
        product: {}
    },
    reducers: {
        messageClear: (state) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // Add Product
            .addCase(add_product.pending, (state) => {
                state.loader = true;
            })
            .addCase(add_product.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload?.error || 'Failed to add product';
            })
            .addCase(add_product.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload?.message || 'Product added successfully!';
            })
            // Get Products
            .addCase(get_products.fulfilled, (state, { payload }) => {
                state.products = payload.products;
                state.totalProduct = payload.totalProduct;
            });
    }
});

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;