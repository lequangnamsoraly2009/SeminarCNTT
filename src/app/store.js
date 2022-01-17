import { configureStore } from "@reduxjs/toolkit";
import treeFamilyReducer from "./treeFamilySlice";

const store = configureStore({
  reducer: {
    treeFamily: treeFamilyReducer,
  },
});

export default store;
