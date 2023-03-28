import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDiscount } from "../../server";

export const fetchData= createAsyncThunk('getData',(arg,{dispatch})=>{
    getDiscount().then((res)=>{
        dispatch(getDiscountData(res))
    })
})

const centerSlice=createSlice({
    name:'home',
    initialState:{
        discount:{}
    },
    reducers:{
      getDiscountData:(state,{payload})=>{
        state.discount=payload
      }
    }
})
export const {getDiscountData,decrement}=centerSlice.actions
export default centerSlice.reducer
