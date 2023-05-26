import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    id: 0,
    name: null
}

export const UserStore = createSlice ({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser : (state, action) => {
            return action.payload;
        },
        
    }

})

export const { setCurrentUser } = UserStore.actions; 
export default UserStore.reducer;