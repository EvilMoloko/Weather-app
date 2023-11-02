import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import PopupWeatherItem from "../PopupWeatherItem/PopupWeatherItem";
import {createPortal} from 'react-dom';
import { useState } from "react";

const WeatherListItem = ({day, time}) => {
    const [activeModal, setModalActive] = useState(false)

    const {temperature, precipitation, weekDay, weatherIcon, calendarDay} = day
    return (
        <div className="weather-list__card" onClick={() => {setModalActive(true)}}>
            <div className="weather-list__card__week-day">{weekDay}</div>
            <div className="weather-list__card__calendar-day">{calendarDay}</div>
            <div className="weather-list__card__weather-icon">
                <GlobalSvgSelector id={weatherIcon}/>
            </div>
            <div className="weather-list__card__temperature">{temperature.value}°</div>
            <div className="weather-list__card__temperture-feels">{temperature.feels}°</div>
            <div className="weather-list__card__text">{precipitation}</div>
            {createPortal(<PopupWeatherItem day={day}
                                            time={time}
                                            active={activeModal}
                                            setActive={setModalActive}
                         />, document.body
                )}
        </div>
    )
}

export default WeatherListItem;