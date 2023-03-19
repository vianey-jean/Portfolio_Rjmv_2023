import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import themeSlice from './themeSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    theme: themeSlice,
  },
})
