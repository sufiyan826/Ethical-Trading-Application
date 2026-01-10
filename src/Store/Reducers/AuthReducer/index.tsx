import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginUser: false,
  userDetails: [],
  tokenId: null,
  first: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirst: state => {
      state.first = false;
    },
    setLoginUser: state => {
      state.loginUser = true;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenId = action.payload;
    },
    logOut: () => initialState,
  },
});

export const {setFirst, setLoginUser, setUserDetails, setTokenId, logOut} =
  authSlice.actions;

export default authSlice.reducer;
