import { useEffect } from "react";
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { interpretWindDirection, interpretWindSpeed, convertGPaToMmHg } from "../../functionsWeatherInterpreter/functionsWeatherInterpeter";

const ThisDayInfo = ({weather, isLoading}) => {
    const {temperature_2m, apparent_temperature, surface_pressure, precipitation, wind_speed_10m, wind_direction_10m} = weather

    const windDirection = interpretWindDirection(wind_direction_10m)
    const windSpeed = interpretWindSpeed(wind_speed_10m)
    const pressureMmHg = convertGPaToMmHg(surface_pressure)

    useEffect(()=> {
        console.log('InfoDay')
    },[weather])

    return (
        <div className="this-day-info">
            { isLoading ? <LoadingIcon/> : 
                <>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="temp" /></div>
                        <span>Температура</span>
                        <div className="this-day-info__item__text">
                            {Math.round(temperature_2m)}° - ощущается как {Math.round(apparent_temperature)}°
                        </div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="pressure" /></div>
                        <span>Давление</span>
                        <div className="this-day-info__item__text">{pressureMmHg} мм ртутного столба</div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="precipitation" /></div>
                        <span>Осадки</span>
                        <div className="this-day-info__item__text">
                            {
                                (precipitation) ? (precipitation.toFixed(1) + " мм") : ""
                                ||
                                "Без осадков" 
                            }
                        </div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="wind" /></div>
                        <span>Ветер</span>
                        <div className="this-day-info__item__text">
                            {wind_speed_10m.toFixed(1)} м/с {windDirection} - {windSpeed}
                        </div>
                    </div>
                </>
            } 
      </div>
    )
}

export default ThisDayInfo;