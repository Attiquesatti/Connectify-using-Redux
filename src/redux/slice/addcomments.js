import { createSlice } from "@reduxjs/toolkit";

export const addcommentsSlice = createSlice ({
    name: 'addcomments',
    initialState : [],
    reducers:{
        addComment : (state, action)=>{
            state.push(action.payload)
        },
    },
});

export const {addComment} = addcommentsSlice.actions;

export default addcommentsSlice.reducer;