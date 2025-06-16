import { createSlice } from '@reduxjs/toolkit';
import api from '../../config/axios';

const initialState = {
    products: [],
    loading: false,
    error: null
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = null;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export const fetchProducts = (type) => async (dispatch) => {
    try {
        dispatch(fetchProductsStart());
        const response = await api.get(`/products${type ? `?type=${type}` : ''}`);
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.response?.data?.message || 'Failed to fetch products'));
    }
};

export default productSlice.reducer;