import { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterWeatherItem from "../FilterWeatherItem/FilterWeatherItem";

const FilterWeather = () => {
    const {activeWeatherFilter, allWeatherFilters} = useSelector(state => state.filterWeatherSliceReducer)

    useEffect(()=>{
     console.log('rerenderFilter')
    },[activeWeatherFilter])

    const filterItems = allWeatherFilters.map((item) => {
        let classes = 'weather-list-filter__item'
        if (item == activeWeatherFilter) {
            classes += ' weather-list-filter__item_active'
        }

        return <FilterWeatherItem key={item}
                                text={item}
                                classes={classes}
                                />
    })

    return (
        <ul className="weather-list-filter">
            {filterItems}
        </ul>
    )
}

export default FilterWeather;