import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import chatReducer from "./ChatSlice";  
import sidebarReducers from "./sideBarSlice";

const store = configureStore({
    reducer: {
        search: searchReducer,
        chat: chatReducer,
        sidebar: sidebarReducers,
    }
});

export default store;