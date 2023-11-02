import { useState } from "react";
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";

const ThisDay = ({data}) => {
    const {time} = data;
    const {temperature, weekDay, weatherIcon, city} = data.days[0];
    
    return (
        <div className="this-day">
            <div className="this-day__head">
              <div className="this-day__temperature">
                <span>{temperature.value}°</span>
                {weekDay}
                </div>
              <div className="this-day__weather-icon">
                <GlobalSvgSelector id={weatherIcon} /></div>
            </div>
            <div className="this-day__foot">
                <div className="this-day__time">Время: {time}</div>
                <div className="this-day__city">Город: {city}</div>
            </div>
        </div>
    )
}

export default ThisDay;