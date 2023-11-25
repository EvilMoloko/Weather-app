import { WeatherService } from "../../services/WeatherService"
import { currentWeatherSlice } from "../../slices/currentWeatherSlice"

export const fetchCurrentWeather = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
            const response = await WeatherService.getCurrentWeather(payload)
            if (response.status === 200) {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(response))
            } else {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(response))
            }
        } catch (error) {
            console.log(error)
        }
        
    }
}