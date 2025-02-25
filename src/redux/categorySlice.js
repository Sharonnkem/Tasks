import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],  
  searchQuery: "",
  currentPage: 1,  
  itemsPerPage: 10,  
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload; 
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; 
    },
    setCurrentPage: (state, action) => {  
      state.currentPage = action.payload;
    },
  },
});

export const { setCategories, setSearchQuery, setCurrentPage } = categorySlice.actions;
export default categorySlice.reducer;
