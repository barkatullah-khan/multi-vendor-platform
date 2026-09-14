import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Async Thunk: Add Category
export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/category-add", formData, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk: Get Categories
export const get_category = createAsyncThunk(
  "category/get_category",
  async (
    { searchValue, parPage, page },
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const { data } = await api.get(
        `/category-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`,
        { withCredentials: true },
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk: Update Category
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ categoryId, formData }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(
        `/category-update/${categoryId}`,
        formData,
        { withCredentials: true },
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async Thunk: Delete Category
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (categoryId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.delete(`/category-delete/${categoryId}`, {
        withCredentials: true,
      });
      return fulfillWithValue({ ...data, categoryId });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    categorys: [],
    totalCategory: 0,
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Category Handlers
      .addCase(categoryAdd.pending, (state) => {
        state.loader = true;
      })
      .addCase(categoryAdd.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage =
          payload?.error || payload?.message || "Something went wrong";
      })
      .addCase(categoryAdd.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.categorys = [payload.category, ...state.categorys];
        state.totalCategory = state.totalCategory + 1;
      })

      // Get Categories Handlers
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.categorys = payload.categorys;
        state.totalCategory = payload.totalCategory;
      })

      // Update Category Handlers
      .addCase(updateCategory.pending, (state) => {
        state.loader = true;
      })
      .addCase(updateCategory.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.categorys = state.categorys.map((c) =>
          c._id === payload.category._id ? payload.category : c,
        );
      })
      .addCase(updateCategory.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage =
          payload?.error || payload?.message || "Update failed";
      })

      // Delete Category Handlers
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.categorys = state.categorys.filter(
          (c) => c._id !== payload.categoryId,
        );
        state.totalCategory = state.totalCategory - 1;
      })
      .addCase(deleteCategory.rejected, (state, { payload }) => {
        state.errorMessage =
          payload?.error || payload?.message || "Delete failed";
      });
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
