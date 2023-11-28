import { useEffect } from "react"
import React from "react"
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector"
import LoadingIcon from "../LoadingIcon/LoadingIcon"
import {
    correctedTime,
    interpretToIconWeatherCode,
} from "../../functionsWeatherInterpreter/functionsWeatherInterpeter"

const ThisDay = React.memo(({ weather, isLoading, city }) => {
    const { temperature_2m, time, weather_code } = weather
    const timeDay = correctedTime(time)
    const weatherIcon = interpretToIconWeatherCode(weather_code)

    useEffect(() => {
        console.log("ThisDay")
    }, [weather])

    return (
        <div className="this-day">
            {isLoading ? (
                <LoadingIcon />
            ) : (
                <>
                    <div className="this-day__head">
                        <div className="this-day__temperature">
                            <span>{Math.round(temperature_2m)}°</span>
                            {"Сейчас"}
                        </div>
                        <div className="this-day__weather-icon">
                            <GlobalSvgSelector id={weatherIcon} />
                        </div>
                    </div>
                    <div className="this-day__foot">
                        <div className="this-day__time">
                            Данные на: {timeDay}
                        </div>
                        <div className="this-day__city">
                            Город: {city.charAt(0).toUpperCase() + city.slice(1)}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
})

export default ThisDay
