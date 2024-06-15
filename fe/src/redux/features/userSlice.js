import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as api from "../api";

export const signup = createAsyncThunk(
  "/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.signup(data);
      return response.data;
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        alert("An unexpected error occurred");
        return rejectWithValue(error.message);
      }
    }
  }
);

export const authenticate = createAsyncThunk(
  "/authenticate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.authenticate(data);
      userSlice.actions.setMessageSignup("");
      return response.data;
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        alert("An unexpected error occurre2323d");
        return rejectWithValue(error.message);
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userID: "",
    username: "",
    token: "",
    messageSignup: "",
    loading: false,
    checked: false,
    error: null,
  },
  reducers: {
    setMessageSignup: (state, action) => {
      state.messageSignup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload;
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.checked = true;
        state.messageSignup = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setMessageSignup } = userSlice.actions;

export default userSlice.reducer;
