import { WeatherService } from "../../services/WeatherService"
import { sixteenDaysWeatherSlice } from "../../slices/sixteenDaysWeatherSlice"

export const fetchSixteenDaysWeather = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(sixteenDaysWeatherSlice.actions.fetchSixteenDaysWeather())
            const response = await WeatherService.get16DaysWeather(payload)
            if (response.status === 200) {
                dispatch(sixteenDaysWeatherSlice.actions.fetchSixteenDaysWeatherSuccess(response))
            } else {
                dispatch(sixteenDaysWeatherSlice.actions.fetchSixteenDaysWeatherError(response))
            }
        } catch (error) {
            console.log(error)
        }
        
    }
}