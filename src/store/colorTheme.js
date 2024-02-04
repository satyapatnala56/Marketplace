import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem('theme') ?? 'light'
}
const colorTheme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme)
        }
    }
})

const themeReducer = colorTheme.reducer
export default themeReducer

export const themeActions = colorTheme.actions