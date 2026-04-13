import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import projectReducer from "./slices/projetSlice";
import testimonialReducer from "./slices/testimonialSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    testimonials: testimonialReducer,
  }
});