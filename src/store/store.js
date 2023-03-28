import { configureStore } from "@reduxjs/toolkit"
import centerslice from "./fetures/centerslice"

 const store =configureStore({
     reducer:{
        center:centerslice
    }
})
export default store