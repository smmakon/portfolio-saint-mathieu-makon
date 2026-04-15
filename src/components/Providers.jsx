"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../redux/slices/authSlice";

function InitAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return null;
}

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <InitAuth />
      {children}
    </Provider>
  );
}