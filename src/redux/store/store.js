import { createStore } from "redux";
import rootReducer from "../reducer";
// import { createSlice } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
const store = createStore(rootReducer);
export default store;
