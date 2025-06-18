import { createSlice } from "@reduxjs/toolkit";

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage?.getItem("language") || "en";
  }
  return "en";
};

const initialState = {
  currentLanguage: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
