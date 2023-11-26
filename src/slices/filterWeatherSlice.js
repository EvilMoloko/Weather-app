import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allWeatherFilters: [
        {label:'На неделю', value: 7},
        {label:'На 10 дней', value: 10},
        {label:'На 16 дней', value: 16},
    ],
    activeWeatherFilter: 7,
    isLoading: false,
}

export const filterWeatherSlice = createSlice({
    name: 'filterWeather',
    initialState,
    reducers: {
        changeFilterWeather (state, action) {
            state.activeWeatherFilter = action.payload;
            state.isLoading = false;
        } 
    }
})

export const {changeFilterWeather} = filterWeatherSlice.actions;
export default filterWeatherSlice.reducer;