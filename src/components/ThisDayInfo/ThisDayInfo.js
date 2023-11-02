import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";

const ThisDayInfo = ({data}) => {
    const {temperature, pressure, wind, precipitation} = data

    return (
        <div className="this-day-info">
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
    )
}

export default ThisDayInfo;