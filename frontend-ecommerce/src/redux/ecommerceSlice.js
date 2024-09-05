import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    option: 1,
  },
  search: null,
};

export const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    changeOption(state, { payload }) {
      state.params.option = payload;
    },
    handleSearch(state, { payload }) {
      state.search = payload;
    },
  },
});

export const { changeOption, handleSearch } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
