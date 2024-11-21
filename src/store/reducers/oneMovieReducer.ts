import { createSlice } from "@reduxjs/toolkit";

export interface Movie {
    Title: string;
    BoxOffice: string;
    Poster: string;
    Rated: string;
    Released: string;
    Year: string;
    Ratings: [];
    Director: string;
    imdbRating: string;
    imdbID: string;
}
interface State {
    movie: Movie;
    loading: boolean;
    error: null
}

export const oneMovieSlice = createSlice({
    name: 'oneMovie',
    initialState: <State>{
        movie: {},
        loading: false,
        error: null
    },

    reducers: {
        fetchMovie(state) {
            state.loading = true;
            state.error = null;
        },
        moviesFetchingSuccess(state, action) {
            state.loading = false;
            state.movie = action.payload;
        },
        moviesFetchingError(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default oneMovieSlice.reducer