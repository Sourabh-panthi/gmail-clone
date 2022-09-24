import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../features/EmailSlice";
import userReducer from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
    user: userReducer,
  },
});
