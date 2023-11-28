import axios from 'axios';

class WeatherService {

    static getCitiesCoordinates (city, count = 1) {
        return (
            axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=${count}&language=ru`
            )
            .then(data => {
                if(data.data.results) {
                    const citiesData = data.data.results.map(item => {
                        const {id, name, latitude, longitude} = item
                        return (
                            {
                                id,
                                name,
                                latitude,
                                longitude
                            }
                        )
                    })
                    return ({citiesData} || 0)
                }      
            })
        )
    }

    static getCurrentWeather (city) {
        return (
            this.getCitiesCoordinates(city)
            .then(({citiesData}) => {
                return axios.get(
                    `https://api.open-meteo.com/v1/gfs?latitude=${citiesData[0].latitude}&longitude=${citiesData[0].longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&wind_speed_unit=ms&timeformat=unixtime`
                )
            })
        )
    }

    static get16DaysWeather (city, days = 16) {
        return (
            this.getCitiesCoordinates(city)
                .then(({citiesData}) => {
                    return axios.get(
                        `https://api.open-meteo.com/v1/forecast?latitude=${citiesData[0].latitude}&longitude=${citiesData[0].longitude}&forecast_days=${days}&hourly=surface_pressure&daily=weather_code,temperature_2m_max,apparent_temperature_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=ms&timeformat=unixtime`
                    )
                })
        )
    }
    
};

export {WeatherService};