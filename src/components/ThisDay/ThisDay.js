import { useEffect } from "react";
import axios from "axios";
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { correctedTime, convertPrecipitationToIcon } from "../../functionsWeatherInterpreter/functionsWeatherInterpeter";

const ThisDay = ({weather, isLoading, city}) => {

    const {temperature_2m, time} = weather

    console.log('obnovaThisDay')

    const weatherIcon = convertPrecipitationToIcon(weather);

    return (
        <div className="this-day">
            { isLoading ? <LoadingIcon/> : 
                <>
                    <div className="this-day__head">
                        <div className="this-day__temperature">
                            <span>{Math.round(temperature_2m)}°</span>
                            {'Сегодня'} 
                        </div>
                        <div className="this-day__weather-icon">
                            <GlobalSvgSelector id={weatherIcon} />
                        </div>
                    </div>
                    <div className="this-day__foot">
                        <div className="this-day__time">Время: {correctedTime(time)}</div>
                        <div className="this-day__city">Город: {city.charAt(0).toUpperCase() + city.slice(1)}</div>
                    </div>
                </>
            }
        </div>
    )
}

export default ThisDay;