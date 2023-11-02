import { useCallback, useMemo, useEffect, useState } from "react";
import FilterWeatherItem from "../FilterWeatherItem/FilterWeatherItem";

const FilterWeather = () => {
    const [currentFilter, setCurrentFilter] = useState('На 10 дней')
    const filters = ['На неделю','На 10 дней','На месяц']
    console.log(currentFilter)

    useEffect(()=>{
        console.log('Rendered')
    },[currentFilter])

    const changeActiveFilter = (text) => {
        setCurrentFilter(text)
    }

    const filterItems = filters.map((item, i) => {
        let classes = 'weather-list-filter__item'
        if (item == currentFilter) {
            classes += ' weather-list-filter__item_active'
        }

        return <FilterWeatherItem key={i}
                                text={item}
                                classes={classes}
                                onChangeActiveFilter={(item)=>changeActiveFilter(item)}/>
    })

    return (
        <ul className="weather-list-filter">
            {filterItems}
        </ul>
    )
}

export default FilterWeather;