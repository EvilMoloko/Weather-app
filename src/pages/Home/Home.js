import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import FilterWeather from "../../components/FilterWeather/FilterWeather";
import HeaderWeather from "../../components/HeaderWeather/HeaderWeather";
import ThisDay from "../../components/ThisDay/ThisDay";
import ThisDayInfo from "../../components/ThisDayInfo/ThisDayInfo";
import WeatherList from "../../components/WeatherList/WeatherList";



const Home = () => {
    const date = new Date();
    const correctedTime = (date) => {
        let hour = date.getHours();
        let minute = date.getMinutes()

        return (hour < 10 ? '0' : '') + hour + ': ' + (minute < 10 ? '0' : '') + minute
    }
    const data = {
        days: [
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Без осадков',
                weatherIcon:'snow',
                city:'Москва', 
                weekDay:'Сегодня',
                calendarDay: '22 октября'
            },
            {
                temperature: {
                    value: 19,
                    feels: 16
                },
                pressure: {
                    value: 754,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 2,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Без осадков',
                weatherIcon:'sun',
                city:'Москва', 
                weekDay:'Пн',
                calendarDay: '23 октября'
            },
            {
                temperature: {
                    value: 18,
                    feels: 15
                },
                pressure: {
                    value: 753,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Без осадков',
                weatherIcon:'rain',
                city:'Москва', 
                weekDay:'Вт',
                calendarDay: '24 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Без осадков',
                weatherIcon:'small-rain',
                city:'Москва', 
                weekDay:'Ср',
                calendarDay: '25 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Без осадков',
                weatherIcon:'snow',
                city:'Москва', 
                weekDay:'Чт',
                calendarDay: '26 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Без осадков',
                weatherIcon:'snow',
                city:'Москва', 
                weekDay:'Пт',
                calendarDay: '27 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Небольшой дождь',
                weatherIcon:'small-snow',
                city:'Москва', 
                weekDay:'Сб',
                calendarDay: '28 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Небольшой дождь',
                weatherIcon:'small-snow',
                city:'Москва', 
                weekDay:'Сб',
                calendarDay: '28 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Небольшой дождь',
                weatherIcon:'small-snow',
                city:'Москва', 
                weekDay:'Сб',
                calendarDay: '28 октября'
            },
            {
                temperature: {
                    value: 20,
                    feels: 17
                },
                pressure: {
                    value: 755,
                    level: 'Нормальное'
                },
                wind: {
                    speed: 3,
                    direction: 'Юго-запад',
                    level: 'Легкий ветер'
                },
                precipitation: 'Небольшой дождь',
                weatherIcon:'small-snow',
                city:'Москва', 
                weekDay:'Сб',
                calendarDay: '28 октября'
            },
        ],
        time: correctedTime(date)
    }

    const {currentWeather, isLoading, respone} = useSelector(state => state.currentWeatherSliceReducer)
    const {activeCity} = useSelector(state => state.citySliceReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCurrentWeather(activeCity))
    },[activeCity])

    useEffect(() => {
        const intervalCurrentWeatherId = setInterval(() => {
            dispatch(fetchCurrentWeather('псков'))
        }, 300000) 
        // не обновляется само через 5 мин
        return () => clearInterval(intervalCurrentWeatherId)
    },[dispatch])

    return (
        <>
            <HeaderWeather/>
            <main>   
                <ThisDay weather={currentWeather} isLoading={isLoading} city={activeCity}/>
                <ThisDayInfo weather={currentWeather} isLoading={isLoading}/>
                <FilterWeather/>
                <WeatherList days={data.days} time={data.time}/>
            </main>
        </>
    )
}

export default Home;