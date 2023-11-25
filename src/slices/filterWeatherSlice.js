import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allWeatherFilters: [
        'На неделю',
        'На 10 дней',
        'На месяц'
    ],
    activeWeatherFilter: 'На неделю',
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