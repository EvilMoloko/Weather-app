import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { fetchSixteenDaysWeather } from "../../store/thunks/fetchSixteenDaysWeather";
import FilterWeather from "../../components/FilterWeather/FilterWeather";
import HeaderWeather from "../../components/HeaderWeather/HeaderWeather";
import ThisDay from "../../components/ThisDay/ThisDay";
import ThisDayInfo from "../../components/ThisDayInfo/ThisDayInfo";
import WeatherList from "../../components/WeatherList/WeatherList";



const Home = () => {

    const {currentWeather, isLoadingCurrentWeather} = useSelector(state => state.currentWeatherSliceReducer)
    const {activeCity} = useSelector(state => state.citySliceReducer)
    const {activeWeatherFilter} = useSelector(state => state.filterWeatherSliceReducer)
    const dispatch = useDispatch()
    const {daily, hourlySurfacePressure, isLoadingSixteenDaysWeather} = useSelector(state => state.sixteenDaysWeatherSliceReducer)
    
    useEffect(() => {
        dispatch(fetchCurrentWeather(activeCity))
        dispatch(fetchSixteenDaysWeather(activeCity))
    },[activeCity])

    useEffect(() => {
        const intervalCurrentWeatherId = setInterval(() => {
            dispatch(fetchCurrentWeather(activeCity))
        }, 300000) 
        // не обновляется само через 5 мин
        return () => clearInterval(intervalCurrentWeatherId)
    },[dispatch])

    return (
        <>
            <HeaderWeather/>
            <main>   
                <ThisDay
                    weather={currentWeather}
                    isLoading={isLoadingCurrentWeather}
                    city={activeCity}
                />
                <ThisDayInfo 
                    weather={currentWeather} 
                    isLoading={isLoadingCurrentWeather}
                />
                <FilterWeather/>
                <WeatherList 
                    weather={daily} 
                    pressure={hourlySurfacePressure}
                    activeWeatherFilter={activeWeatherFilter} 
                    isLoading={isLoadingSixteenDaysWeather}
                    city={activeCity}
                />
            </main>
        </>
    )
}

export default Home;