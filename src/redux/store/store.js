import { configureStore } from "@reduxjs/toolkit";

import UserStore from "./UserStore";



const store = configureStore({
    reducer: {
        currentUser: UserStore
    }
})

export default store
