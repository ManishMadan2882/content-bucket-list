import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./slice/bucketSlice";
const store= configureStore({
    reducer:{
        buckets:bucketSlice,
    }
});


export default store;