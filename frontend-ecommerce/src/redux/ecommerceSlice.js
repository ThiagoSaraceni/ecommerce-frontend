import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    option: 1,
  },
  search: null,
  userId: null,
  refreshCart: false,
  page: 1,
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
    handleUserId(state, { payload }) {
      state.userId = payload;
    },
    handleRefreshCart(state, { payload }) {
      state.refreshCart = payload;
    },
    handlePageChange(state, { payload }) {
      state.page = payload;
    },
  },
});

export const {
  changeOption,
  handleSearch,
  handleUserId,
  handleRefreshCart,
  handlePageChange,
} = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
