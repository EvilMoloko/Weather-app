import { configureStore, combineReducers } from "@reduxjs/toolkit"
import currentWeatherSlice from "../slices/currentWeatherSlice"
import filterWeatherSlice from "../slices/filterWeatherSlice"
import citySlice from "../slices/citySlice"
import sixteenDaysWeatherSlice from "../slices/sixteenDaysWeatherSlice"

const rootReducer = combineReducers({
    currentWeatherSliceReducer: currentWeatherSlice,
    sixteenDaysWeatherSliceReducer: sixteenDaysWeatherSlice,
    filterWeatherSliceReducer: filterWeatherSlice,
    citySliceReducer: citySlice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
