import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        cache: {},
        query: "",
    },

    reducers: {
        cacheResults: (state, action) => {
            state = {...action.payload, ...state}; 
            //action.payload is the new data and state is the previously stored data
        },
        setQuery: (state, action ) => {
            state.query = action.payload
        }
    }
})

export const {cacheResults, setQuery} = searchSlice.actions; //searchSLice.action gives us {cacheResults: function(actionPayload)}

export default searchSlice.reducer; //we need .reducers because redux doesnot understand slices, it 
//only understands reducers and store expects this function(state, action)