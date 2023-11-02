import React from 'react';
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import Select from "react-select";

const HeaderWeather = () => {
    const options = [
        { value: 'city1', label: 'Санкт-Петербург' },
        { value: 'city2', label: 'Москва' },
        { value: 'city3', label: 'Псков' }
      ]
      
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'rgba(71,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 3,
            textAlign: 'center'
        })
    }
    
    return (
            <header className="header">
                <div className="header__left">
                    <div className="weather-app-logo"><GlobalSvgSelector id='header-logo' /></div>
                    <div className="weather-app-name">React Weather</div>
                </div>
                <div className="header__right">
                    <div className="change-theme-btn"><GlobalSvgSelector id='change-theme' /></div>
                    <div className="select-city-btn">
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