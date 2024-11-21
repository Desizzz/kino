import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { movieSlice } from "./getMovie";
import { AppDispatch } from "../store";
import { oneMovieSlice } from "./oneMovieReducer";
    
export const fetchMovie = (params: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(movieSlice.actions.moviesFetching())
        const responce = await axios.get(`http://www.omdbapi.com/?apikey=5aa95082&s=${params}`)
        if(!responce.data.Search.length && params) throw new Error
        dispatch(movieSlice.actions.moviesFetchingSuccess(responce.data.Search))
    } catch(e: any) {
        dispatch(movieSlice.actions.moviesFetchingError(e.message));
        return 'нет данных' 
    }
}

export const fetchOneMovie = (params: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(movieSlice.actions.nullItem())
        dispatch(oneMovieSlice.actions.fetchMovie())
        const responce = await axios.get(`http://www.omdbapi.com/?apikey=5aa95082&i=${params}`)
        dispatch(oneMovieSlice.actions.moviesFetchingSuccess(responce.data))
        if(movieSlice.actions.InItem(responce.data)) {
            dispatch(movieSlice.actions.addItem(responce.data))
        }
    } catch(e: any) {
        dispatch(oneMovieSlice.actions.moviesFetchingError(e.message));
    }
}
