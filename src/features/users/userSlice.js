const fetch = require("node-fetch");
const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// create async thunk
export const fetchUsers = createAsyncThunk("post/fetchPosts", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    return users;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

// module.exports = userSlice.reducer
// module.exports.fetchUsers = fetchUsers;
export default userSlice.reducer;
