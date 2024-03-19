import { configureStore } from "@reduxjs/toolkit";
import countslice from "./countslice";

export const store = configureStore({
    reducer:{
counterReduce:countslice
    }
})
