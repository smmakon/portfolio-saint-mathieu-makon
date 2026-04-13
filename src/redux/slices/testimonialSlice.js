import { createSlice } from "@reduxjs/toolkit";

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTestimonialsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTestimonialsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTestimonialsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTestimonialsStart,
  fetchTestimonialsSuccess,
  fetchTestimonialsFailure,
} = testimonialSlice.actions;

export default testimonialSlice.reducer;