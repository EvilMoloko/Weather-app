import React, { useEffect, useState } from 'react';
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import Select from "react-select";
import useTheme from '../../hooks/useTheme';

const HeaderWeather = () => {
    const theme = useTheme()
    console.log(theme)

    const options = [
        { value: 'city1', label: 'Санкт-Петербург' },
        { value: 'city2', label: 'Москва' },
        { value: 'city3', label: 'Псков' }
      ]
      
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : '#4F4F4F',
            color: theme.theme === 'light' ? '#000' : '#fff',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 3,
            textAlign: 'center'
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === 'light' ? '#000' : '#fff',
        }),
        option: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === 'light' ? '#fff' : '#4F4F4F',
            color: theme.theme === 'light' ? '#000' : '#fff',
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
    }

    return (
            <header className="header">
                <div className="header__left">
                    <div className="weather-app-logo"><GlobalSvgSelector id='header-logo' /></div>
                    <div className="weather-app-name">React Weather</div>
                </div>
                <div className="header__right">
                    <div className="change-theme-btn" onClick={changeTheme}><GlobalSvgSelector id='change-theme' /></div>
                    <div className="select-city-btn" >
                        <Select defaultValue={options[0]}
                                styles={colourStyles}
                                options={options}
                                 />
                    </div>
                </div>
            </header>
    )
}

export default HeaderWeather;