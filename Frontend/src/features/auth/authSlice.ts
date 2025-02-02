import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    user: {
        username: string;
        email: string
    } | null;
    loading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading:true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState(state, action: PayloadAction<{ isAuthenticated: boolean, user: any }>) {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        logoutUser(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})

export const { setAuthState, setLoading, logoutUser } = authSlice.actions
export default authSlice.reducer;