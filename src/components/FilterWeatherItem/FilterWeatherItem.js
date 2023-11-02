
const FilterWeatherItem = ({id, text, classes, onChangeActiveFilter}) => {
    const changeActiveFilter = (e) => {
        onChangeActiveFilter(e)
    }
    return (
        <div key={id}
            className={classes}
            onClick={() => changeActiveFilter(text)}
            >{text}</div>
    )
}

export default FilterWeatherItem;