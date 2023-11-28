import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentWeather: {
        time: 0,
        temperature_2m: 20,
        apparent_temperature: -6.6,
        is_day: 1,
        precipitation: 0.1,
        rain: 0.0,
        showers: 0.0,
        snowfall: 0.07,
        weather_code: 73,
        cloud_cover: 100,
        pressure_msl: 981.0,
        surface_pressure: 974.7,
        wind_speed_10m: 15.5,
        wind_direction_10m: 202,
    },
    isLoadingCurrentWeather: true,
    respone: {
        status: 0,
        message: "",
    },
}

export const currentWeatherSlice = createSlice({
    name: "currentWeather",
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoadingCurrentWeather = true
        },
        fetchCurrentWeatherSuccess(state, action) {
            state.currentWeather = action.payload.data.current
            state.isLoadingCurrentWeather = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, action) {
            state.isLoadingCurrentWeather = false
            state.respone = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
    },
})

export default currentWeatherSlice.reducer
