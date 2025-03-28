import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/user-slice.jsx";
const rootreducer = combineReducers({
    user: userReducer,
})

export default rootreducer;