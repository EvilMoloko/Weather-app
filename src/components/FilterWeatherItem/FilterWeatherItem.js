import { useDispatch } from "react-redux"
import  {changeFilterWeather}  from "../../slices/filterWeatherSlice"

const FilterWeatherItem = ({id, text, classes}) => {
    const dispatch = useDispatch()

    return (
        <div key={id}
            className={classes}
            onClick={() => dispatch(changeFilterWeather(text))}
            >{text}</div>
    )
}

export default FilterWeatherItem;