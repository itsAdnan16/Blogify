import { createSlice } from "@reduxjs/toolkit";
import { set } from "react-hook-form";

const initialState ={
    posts:[]
}

const postSlice = createSlice({
    name : "post",
    initialState,
    reducers:{
        setPosts(state,action){
            state.posts = action.payload
        },
        addPost(state,action){
            state.posts.push(action.payload)
        },
        deletePost(state,action){
            state.posts = state.posts.filter((post)=>post.$id !== action.payload)
        }
    }
})

export const {addPost,deletePost,setPosts} = postSlice.actions
export default postSlice.reducer