import { configureStore } from '@reduxjs/toolkit'
import musicReducer  from './slices/musicApiSlice'
export default configureStore({
    reducer: {
        music: musicReducer,
    },
})