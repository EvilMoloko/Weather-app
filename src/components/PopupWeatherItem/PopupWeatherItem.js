import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import { correctedWeekDay, correctedMonthDay, interpretWindDirection, interpretWindSpeed, interpretToIconWeatherCode, convertGPaToMmHg } from "../../functionsWeatherInterpreter/functionsWeatherInterpeter";

const PopupWeatherItem = ({active, setActive, day, city}) => {
    const { time, temperature_2m_max, apparent_temperature_max,
        precipitation_sum, wind_speed_10m_max,
        wind_direction_10m_dominant, dailyPressureSum, weather_code} = day

    const weekDay = correctedWeekDay(time)
    const calendarDay = correctedMonthDay(time)
    const pressureMmHg = convertGPaToMmHg(dailyPressureSum)
    const windDirection = interpretWindDirection(wind_direction_10m_dominant)
    const windSpeed = interpretWindSpeed(wind_speed_10m_max)
    const weatherIcon = interpretToIconWeatherCode(weather_code)

    return (
        <div className={active ? 'popup-wrapper' : 'none'}
                onMouseDown={() => setActive(false)}>
            <div className="this-day-info popup-weather-item"
                    onMouseDown={(e) => e.stopPropagation()}>
                <div className="this-day">
                    <div className="this-day__temperature">
                        <span>{Math.round(temperature_2m_max)}°</span>
                        {weekDay}
                    </div>
                    <div className="this-day__weather-icon">
                        <GlobalSvgSelector id={weatherIcon} />
                    </div>
                    <div className="this-day__time">Данные на: {calendarDay}</div>
                    <div className="this-day__city">Город: {city}</div>
                </div>
                <div className="wrapper">
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="temp" /></div>
                        <span>Температура</span>
                        <div className="this-day-info__item__text">{Math.round(temperature_2m_max)}° - ощущается как {Math.round(apparent_temperature_max)}°</div>
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
                                (precipitation_sum) ? (precipitation_sum.toFixed(1) + " мм") : ""
                                ||
                                "Без осадков" 
                            }
                        </div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="wind" /></div>
                        <span>Ветер</span>
                        <div className="this-day-info__item__text">
                            {wind_speed_10m_max.toFixed(1)} м/с {windDirection} - {windSpeed}
                        </div>
                    </div>
                </div>
                <div className="popup-close-btn" onMouseDown={() => setActive(false)}>
                    <GlobalSvgSelector id='popup-close-btn' />
                </div>
            </div>
        </div>
    )
}


export default PopupWeatherItem;