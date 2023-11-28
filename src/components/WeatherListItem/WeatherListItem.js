import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector"
import PopupWeatherItem from "../PopupWeatherItem/PopupWeatherItem"
import { createPortal } from "react-dom"
import { useState } from "react"
import {
    correctedWeekDay,
    correctedMonthDay,
    interpretToIconWeatherCode,
    interpretWeatherCodeToDescr,
} from "../../functionsWeatherInterpreter/functionsWeatherInterpeter"
import LoadingIcon from "../LoadingIcon/LoadingIcon"

const WeatherListItem = ({ day, city, isLoading }) => {
    const [activeModal, setModalActive] = useState(false)

    const { time, temperature_2m_max, temperature_2m_min, weather_code } = day

    const weatherIcon = interpretToIconWeatherCode(weather_code)
    const weekDay = correctedWeekDay(time)
    const calendarDay = correctedMonthDay(time)
    const description = interpretWeatherCodeToDescr(weather_code)

    return (
        <div
            className="weather-list__card"
            onClick={() => {
                setModalActive(true)
            }}
        >
            {isLoading ? (
                <LoadingIcon />
            ) : (
                <>
                    <div className="weather-list__card__week-day">
                        {weekDay}
                    </div>
                    <div className="weather-list__card__calendar-day">
                        {calendarDay}
                    </div>
                    <div className="weather-list__card__weather-icon">
                        <GlobalSvgSelector id={weatherIcon} />
                    </div>
                    <div className="weather-list__card__temperature">
                        {Math.round(temperature_2m_max)}°
                    </div>
                    <div className="weather-list__card__temperature-night">
                        {Math.round(temperature_2m_min)}°
                    </div>
                    <div className="weather-list__card__text">
                        {description}
                    </div>
                    {activeModal
                        ? createPortal(
                              <PopupWeatherItem
                                  day={day}
                                  city={city}
                                  active={activeModal}
                                  setActive={setModalActive}
                              />,
                              document.body
                          )
                        : null}
                </>
            )}
        </div>
    )
}

export default WeatherListItem
