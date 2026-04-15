import { createSlice } from "@reduxjs/toolkit";
import api from "axios" ;

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
       state.error = null;
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch(authStart());
    const res = await api.post("/api/auth/login", data);
    dispatch(authSuccess(res.data.user));
    return res.data;
  } catch (err) {
    const message = err.response?.data?.message || "Erreur de connexion";
    dispatch(authFailure(message));
    throw new Error(message);
  }
};

export const fetchCurrentUser = () => async (dispatch) => {
  try {
    const res = await api.get("/api/auth/me");
    if (res.data.user) {
      dispatch(authSuccess(res.data.user));
    }
  } catch (err) {
    console.log("Utilisateur non connecté");
  }
};

export const logoutUser = () => async (dispatch) => {
  await api.post("/api/auth/logout");
  dispatch(logoutSuccess());
};


export const { authStart, authSuccess, authFailure, logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;