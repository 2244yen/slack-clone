import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginFn } from '../../services/user';

export const authenticate = createAsyncThunk('users/authenticate', async (payload: any, thunkApi) => {
  const { email, password } = payload;
  const response = await loginFn({ email, password });
  return response;
})

interface UserState {
  isLogined: boolean,
  token: string,
  user: any
}

export const userSlice = createSlice({
  name: 'user',
  initialState: <UserState>{
    isLogined: false,
    user: {},
    token: ''
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state) => {
        state.isLogined = false;
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.isLogined = true;
        const user: any = action.payload;
        user && localStorage.setItem('token', user.accessToken);
        state.user = user || {};
      });
  }
})


export default userSlice.reducer;

