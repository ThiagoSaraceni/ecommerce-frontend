import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    option: 1,
  },
};

export const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    changeOption(state, { payload }) {
      state.params.option = payload;
    },
  },
});

export const { changeOption } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
