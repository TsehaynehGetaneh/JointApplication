import { Data } from "@/types/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface State {
    username:string | null,
    isAdmin:boolean | null,
    token:string | null
}

const initialState:State = {
    username:null,
    isAdmin:false,
    token:null
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccessToken(state, action:PayloadAction<Data>){
            state.username = action.payload.username
            state.isAdmin = true
            state.token = action.payload.token
        },
        logout(state){
            state.username = null
            state.isAdmin = false
            state.token = null
        }
    }
})

export const { setAccessToken, logout } = authSlice.actions