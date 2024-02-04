import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModelIndex: -1,
    data: []
}

const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        changeActiveIndex: (state, action) => {
            state.activeModelIndex = action.payload.index
        },
        addModel: (state, action) => {
            state.data = [action.payload.data, ...state.data]
        },
        setData: (state, action) => {
            state.data = [...action.payload.data]
        }
    }
})

const modelReducer = modelSlice.reducer
export default modelReducer

export const modelActions = modelSlice.actions