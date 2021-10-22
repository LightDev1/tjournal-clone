import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ResponseUser } from '../../utils/api/types';
import { RootState } from '../store';

export interface UserState {
    data: ResponseUser | null;
};

const initialState: UserState = {
    data: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state: Draft<UserState>, action: PayloadAction<ResponseUser>) => {
            state.data = action.payload;
        }
    },
});

export const { setUserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data;

export const userReducer = userSlice.reducer;