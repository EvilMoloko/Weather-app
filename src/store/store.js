import {configureStore, combineReducers } from '@reduxjs/toolkit'
import  currentWeatherSlice  from '../slices/currentWeatherSlice'
import filterWeatherSlice from '../slices/filterWeatherSlice'
import citySlice from '../slices/citySlice';

const rootReducer = combineReducers({
    currentWeatherSliceReducer: currentWeatherSlice,
    filterWeatherSliceReducer: filterWeatherSlice,
    citySliceReducer: citySlice
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
    ,
})

