"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../redux/slices/authSlice"

export default function AuthLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return children;
}