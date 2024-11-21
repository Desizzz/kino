import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import movieReducer from './reducers/getMovie'
import oneMovieReducer from './reducers/oneMovieReducer'


const rootReducer = combineReducers({
    movieReducer,
    oneMovieReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
} 

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']