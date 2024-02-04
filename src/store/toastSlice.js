import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {

}
const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        showWarn: (state, action) => {
            toast.warn(action.payload.msg, { position: "bottom-left" })
        }
    }
})

const toastReducer = toastSlice.reducer
export default toastReducer

export const toastActions = toastSlice.actions