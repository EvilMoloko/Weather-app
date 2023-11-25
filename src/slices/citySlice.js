import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    citiesList: [
        'Санкт-Петербург',
        'Москва',
        'Астрахань',
        'Владивосток',
        'Псков', 
    ],
    activeCity: 'Санкт-Петербург',
    isLoading: false,
    respone: {
        status: 0,
        message: ''
    }
}

export const citySlice = createSlice({
    name: 'cityWeather',
    initialState,
    reducers: {
        fetchCity (state) {
            state.isLoading = true
        },
        fetchCitySuccess (state, action) {
            state.activeCity = action.payload.data["tyt eshe cheta"];
            console.log(action.payload.data)
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCityError (state, action) {
            state.isLoading = false;
            state.respone = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        changeCity (state, action) {
            state.activeCity = action.payload;
            state.isLoading = false;
        } 
    }
})

export const {changeCity} = citySlice.actions;
export default citySlice.reducer;