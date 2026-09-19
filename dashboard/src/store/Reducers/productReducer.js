import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// 1. ASYNC THUNK: Add Product (Receives the FormData directly from AddProduct.jsx)
export const add_product = createAsyncThunk(
    'product/add_product',
    async (product, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/product-add', product, { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// 2. ASYNC THUNK: Get Products (Handles Search & Pagination)
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

// 3. REDUX SLICE DEFINITION
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
            // Add Product Lifecycle States
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
            
            // Get Products Lifecycle State
            .addCase(get_products.fulfilled, (state, { payload }) => {
                state.products = payload.products;
                state.totalProduct = payload.totalProduct;
            });
    }
});

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;