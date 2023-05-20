import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    accessToken: null,
    refreshToken: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId(state, action) {
            state.id = action.payload;
        }
    },
});

export const { setId } = userSlice.actions;

export default userSlice.reducer;