
import WeatherListItem from "../WeatherListItem/WeatherListItem";


const WeatherList = ({days, time}) => {

	const weatherCards = days.map((day, i) => {
		return <WeatherListItem key={i}
                                day={day}
                                time={time}/>
	})
	
    return (
        <div className="weather-list__wrapper">
			{weatherCards}
        </div>
    )
}

export default WeatherList;