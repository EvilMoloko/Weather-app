
import WeatherListItem from "../WeatherListItem/WeatherListItem";


const WeatherList = ({weather, pressure, activeWeatherFilter, city, isLoading}) => {

    const weatherList = []

    function average(nums) {
        return nums.reduce((a, b) => (a + b), 0) / nums.length;
    }

    for (let i = 0; i < activeWeatherFilter; i++) {
        const pressSum = Math.round(average(pressure.slice((i*16),((i*16)+16))))

        weatherList.push(
            {   
                weather_code: weather.weather_code[i],
                time: weather.time[i],
                temperature_2m_max: weather.temperature_2m_max[i],
                apparent_temperature_max: weather.apparent_temperature_max[i],
                temperature_2m_min: weather.temperature_2m_min[i],
                precipitation_sum: weather.precipitation_sum[i],
                rain_sum: weather.rain_sum[i],
                showers_sum: weather.showers_sum[i],
                snowfall_sum: weather.snowfall_sum[i],
                wind_speed_10m_max: weather.wind_speed_10m_max[i],
                wind_direction_10m_dominant: weather.wind_direction_10m_dominant[i], 
                dailyPressureSum: pressSum
            }
        )
    }

	const weatherCards = weatherList.map((day, i) => {
		return <WeatherListItem
                    key={i}
                    day={day}
                    city={city}
                    isLoading={isLoading}
                />
	})
	
    return (
        <div className="weather-list__wrapper">
			{weatherCards}
        </div>
    )
}

export default WeatherList;