import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
export default configureStore({
  reducer: {
    user: userSlice,
  },
});
export const host = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
