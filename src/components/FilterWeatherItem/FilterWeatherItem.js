import { useDispatch } from "react-redux"
import { changeFilterWeather } from "../../slices/filterWeatherSlice"

const FilterWeatherItem = ({ id, item, classes }) => {
    const dispatch = useDispatch()

    return (
        <div
            key={id}
            className={classes}
            onClick={() => dispatch(changeFilterWeather(item.value))}
        >
            {item.label}
        </div>
    )
}

export default FilterWeatherItem
