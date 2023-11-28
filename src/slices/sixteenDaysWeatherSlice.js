import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    daily: {
        weather_code: [0],
        time: [0],
        temperature_2m_max: [0],
        apparent_temperature_max: [0],
        temperature_2m_min: [0],
        precipitation_sum: [0],
        rain_sum: [0],
        showers_sum: [0],
        snowfall_sum: [0],
        wind_speed_10m_max: [0],
        wind_direction_10m_dominant: [0],
    },
    hourlySurfacePressure: [0],
    isLoadingSixteenDaysWeather: true,
    respone: {
        status: 0,
        message: "",
    },
}

export const sixteenDaysWeatherSlice = createSlice({
    name: "sixteenDaysWeather",
    initialState,
    reducers: {
        fetchSixteenDaysWeather(state) {
            state.isLoadingSixteenDaysWeather = true
        },
        fetchSixteenDaysWeatherSuccess(state, action) {
            state.daily = action.payload.data.daily
            state.hourlySurfacePressure =
                action.payload.data.hourly.surface_pressure
            state.isLoadingSixteenDaysWeather = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchSixteenDaysWeatherError(state, action) {
            state.isLoadingSixteenDaysWeather = false
            state.respone = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
    },
})

export default sixteenDaysWeatherSlice.reducer
