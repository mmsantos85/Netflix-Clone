import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    popup: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setMoviePopupRedux: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const { login, logout, setMoviePopupRedux } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectMoviePopup = (state) => state.user.popup;

export default userSlice.reducer;
