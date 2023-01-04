const fetch = require("node-fetch");
const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk

const initialState = {
    users: [],
    loading: false,
    isError: false,
    error: ''
}

// create async thunk
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    return users;
});
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });
    const userId = await response.json();
    return userId;
});
export const likeUser = createAsyncThunk("user/likeUser", async ({ id }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id.id}`, {
        method: 'POST',
    });
    const user = await response.json();
    return user.id;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        // GET USER
        builder.addCase(fetchUsers.pending, state => {
            state.isError = false;
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isError = false;
            state.loading = false;
            state.users = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.users = [];
        })
        // LIKE USER
        builder.addCase(likeUser.pending, state => {
            state.loading = true
        })
        builder.addCase(likeUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(likeUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        // DELETE USER
        builder.addCase(deleteUser.pending, state => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''

            // state.deleteUser = state.deleteUser.filter(
            //     (t) => t.id !== action.payload
            // );
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})

export default userSlice.reducer;
