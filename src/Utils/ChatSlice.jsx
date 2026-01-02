import { createSlice } from "@reduxjs/toolkit";

 const ChatSlice = createSlice({
    name:"chat",
    initialState: {
        message: [],
        
    },
    reducers:{ 
        addMessage: (state, action) => {
            state.message.push(action.payload); //unshift() => adds a new message at the TOP of the array

            if (state.message.length > 50 ){
                state.message.shift(); //shift() removes from the TOP
            }
        }
    }

 })

export const {addMessage} = ChatSlice.actions;

export default ChatSlice.reducer 