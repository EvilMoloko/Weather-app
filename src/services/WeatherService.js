import axios from 'axios';

class WeatherService {

    
    static  getCurrentWeather (city) {
        return axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru`
        )
        .then(response => {
            const {latitude, longitude} = response.data.results[0]
            return axios.get(
                `https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&wind_speed_unit=ms&timeformat=unixtime`
            )
        })
        // return (
        // axios.get(
        //     `https://api.openweathermap.org/data/2.5/weather/?&lang=${'ru'}&units=metric&q=${city}&appid=8e4ec4f7e028af97e89c6a7739990aaa`
        // ))
    }
    static getMonthWeather (city, days = 7) {
        return axios.get(
            'https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}'
            )
    }
};

export {WeatherService};