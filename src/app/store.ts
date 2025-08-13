import { configureStore } from "@reduxjs/toolkit";
import React from"react"

// import counterReducer from "../features/counter/counterSlice"; // Misol uchun reducer

export const store = configureStore({
  reducer: {
    // counter: counterReducer, // Misol reducer
  },
});

// TypeScript uchun type'lar
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
