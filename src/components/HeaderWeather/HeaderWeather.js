import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector"
import Select from "react-select/async"
import useTheme from "../../hooks/useTheme"
import { changeCity } from "../../slices/citySlice"
import storage from "../../model/storage"
import { WeatherService } from "../../services/WeatherService"

const HeaderWeather = () => {
    const theme = useTheme()

    const dispatch = useDispatch()

    const { citiesList } = useSelector((state) => state.citySliceReducer)

    const options = citiesList.map((item) => {
        return { label: item, value: item }
    })

    const defaultValue = () => {
        return {
            label: storage.getItem("city"),
            value: storage.getItem("city"),
        }
    }

    const sortCitiesByAlphabet = (arr) => {
        return arr.slice().sort((a, b) => a.value.localeCompare(b.value))
    }
    const sortedOptions = sortCitiesByAlphabet(options)

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor:
                theme.theme === "light" ? "rgba(71, 147, 255, 0.2)" : "#4F4F4F",
            color: theme.theme === "light" ? "#000" : "#fff",
            width: "194px",
            height: "37px",
            border: "none",
            borderRadius: "10px",
            zIndex: 3,
            cursor: "pointer",
            textAlign: "center",
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === "light" ? "#000" : "#fff",
        }),
        input: (styles) => ({
            ...styles,
            color: theme.theme === "light" ? "#000" : "#fff",
        }),
        option: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === "light" ? "#fff" : "#4F4F4F",
            color: theme.theme === "light" ? "#000" : "#fff",
            cursor: "pointer",
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === "light" ? "#fff" : "#4F4F4F",
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === "light" ? "dark" : "light")
    }

    const customNoOptionsMessage = () => "Нет подходящих вариантов"

    const loadOptions = useCallback(async (inputValue, callback) => {
        if (inputValue.length > 1) {
            try {
                const response = await WeatherService.getCitiesCoordinates(
                    inputValue,
                    5
                )
                if (response) {
                    const loadedOptions = response.citiesData.map((item) => ({
                        label: item.name,
                        value: item.name,
                    }))
                    callback(sortCitiesByAlphabet(loadedOptions))
                }
            } catch (error) {
                console.error("Error loading options:", error)
                callback([])
            }
        }
    }, [])

    return (
        <header className="header">
            <div className="header__left">
                <div className="weather-app-logo">
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className="weather-app-name">React Weather</div>
            </div>
            <div className="header__right">
                <div className="change-theme-btn" onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <div className="select-city-btn">
                    <Select
                        loadOptions={loadOptions}
                        hideSelectedOptions
                        blurInputOnSelect
                        openMenuOnFocus
                        noOptionsMessage={customNoOptionsMessage}
                        placeholder={"Введите город"}
                        defaultValue={defaultValue}
                        defaultOptions={sortedOptions}
                        styles={colourStyles}
                        onChange={(selectedOption) =>
                            dispatch(changeCity(selectedOption.value))
                        }
                    />
                </div>
            </div>
        </header>
    )
}

export default HeaderWeather
