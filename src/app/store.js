import { configureStore } from "@reduxjs/toolkit";
import treeFamilyReducer from "./treeFamilySlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    treeFamily: treeFamilyReducer,
    user: userReducer,
  },
});

export default store;
