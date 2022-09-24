import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSendMessage: false,
  email: null,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    openSendMail: (state) => {
      state.openSendMessage = true;
    },
    closeSendMail: (state) => {
      state.openSendMessage = false;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { openSendMail, closeSendMail, email } = emailSlice.actions;

export const selectOpenSendBox = (state) => state.email.openSendMessage;
export const selectMails = (state) => state.email.email;
export default emailSlice.reducer;
