import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../helpers/consts';

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userObj) => {
        let formData = new FormData();
        formData.append('username', userObj.username);
        formData.append('password', userObj.password);
        let res = await axios.post(`${API}/register/`, formData);
        console.log(res);
        return res;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
        status: ''
    },
    reducers: {
        cleanErrorState: (state, action) => {
            state.error = null;
        },
        cleanStatusState: (state, action) => {
            state.status = '';
        },
        cleanUserState: (state, action) => {
            state.user = null;
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.status = action.payload.data;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            console.log(action);
            state.error = action.error.name;
        })
    }
});

export const { cleanErrorState, cleanStatusState, cleanUserState } = userSlice.actions;
export default userSlice.reducer;