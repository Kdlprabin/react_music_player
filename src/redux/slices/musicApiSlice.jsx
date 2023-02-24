import { createSlice } from '@reduxjs/toolkit'
import {audio1 } from '../../assets/audioFiles'
const musicData = new Audio(audio1);
export const musicApiSlice = createSlice({
    name: 'music',
    initialState: {
        data: musicData,
    },
    reducers: {
        getMusic: (state) => {
            console.log(state)
        }
    }
});

export const { getMusic } = musicApiSlice.actions

export default musicApiSlice.reducer