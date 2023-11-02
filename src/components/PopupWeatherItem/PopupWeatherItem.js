import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";

const PopupWeatherItem = ({active, setActive, day, time}) => {
    const {temperature, pressure, wind, precipitation, weekDay, weatherIcon, city} = day;

    return (
        <div className={active ? 'popup-wrapper' : 'none'}
                onClick={() => {setActive(false)}}>
            <div className="this-day-info popup-weather-item"
                    onClick={(e) => e.stopPropagation()}>
                <div className="this-day">
                    <div className="this-day__temperature">
                        <span>{temperature.value}°</span>
                        {weekDay}
                    </div>
                    <div className="this-day__weather-icon">
                        <GlobalSvgSelector id={weatherIcon} />
                    </div>
                    <div className="this-day__time">Время: {time}</div>
                    <div className="this-day__city">Город: {city}</div>
                </div>
                <div className="wrapper">
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="temp" /></div>
                        <span>Температура</span>
                        <div className="this-day-info__item__text">{temperature.value}° - ощущается как {temperature.feels}°</div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="pressure" /></div>
                        <span>Давление</span>
                        <div className="this-day-info__item__text">{pressure.value} мм ртутного столба - {pressure.level.toLowerCase()}</div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="precipitation" /></div>
                        <span>Осадки</span>
                        <div className="this-day-info__item__text">{precipitation}</div>
                    </div>
                    <div className="this-day-info__item">
                        <div className="this-day-info__item__icon"><GlobalSvgSelector id="wind" /></div>
                        <span>Ветер</span>
                        <div className="this-day-info__item__text">{wind.speed} м/с {wind.direction.toLowerCase()} - {wind.level.toLowerCase()}</div>
                    </div>
                </div>
                <div className="popup-close-btn" onClick={() => setActive(false)}>
                    <GlobalSvgSelector id='popup-close-btn' />
                </div>
            </div>
        </div>
    )
}


export default PopupWeatherItem;