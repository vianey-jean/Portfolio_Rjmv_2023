import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('theme-port')) || {
  primary: 'color-1',
  background: 'bg-1',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    handlePrimary: (state, { payload }) => {
      state.primary = payload
    },
    handleBck: (state, { payload }) => {
      state.background = payload
    },
  },
})

export const { handlePrimary, handleBck } = themeSlice.actions
export default themeSlice.reducer
