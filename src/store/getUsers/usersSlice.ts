import type { GithubUserTypes } from "@/types/githubUserTypes"
import { createSlice } from "@reduxjs/toolkit"
import actGetUser from "../../store/getUsers/action/actGetUser"
interface UsersState{
    users:GithubUserTypes[],
    loading:boolean,
    error:string|null
}
const initialState:UsersState={
    users:[],
    loading:false,
    error:null
}

export const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{},
     extraReducers:(builder)=>{
         builder
         .addCase(actGetUser.pending,(state)=>{
            state.loading=true
         })
         .addCase(actGetUser.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
         })
         .addCase(actGetUser.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload as string
         })
         
     }
})

export const {}=userSlice.actions
export const userReducer = userSlice.reducer
