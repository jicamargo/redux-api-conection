import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action creator
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    // Fetch users data from an API or any asynchronous operation
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();

    // Return the fetched data
    return data.results;
  } catch (error) {
    // Return the error using rejectWithValue
    return rejectWithValue(error.message);
  }
});

const initialState = {
  users: [],        // Array of users
  isLoading: false, // Boolean flag for loading state
  error: undefined, // Error state
};

const usersSlice = createSlice({
  name: 'users', // Name of the slice as a string
  initialState, 
  reducers: {
    // Define reducers specific to users if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }, 
});

export const { actions } = usersSlice; // Export the actions from the slice
export default usersSlice.reducer; // Export the reducer from the slice
