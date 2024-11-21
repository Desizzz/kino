import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchMovie } from "./ActionsCreators";
import { Movie } from "./oneMovieReducer";

// export interface Movie {
//     Poster: string;
//     Title: string;
//     Type: string;
//     imdbID: string;
//     Year: string;
//     Rated: string;
// }

interface MovieState {
    movies: Movie[];
    likeMovie: Movie[];
    loading: boolean;
    movieMore: Movie[];
    error: string;
}

const initialState: MovieState = {
    movies: [],
    likeMovie: [],
    movieMore: [],
    loading: true,
    error: '',
}

interface pay {
    payload?: any;
    type: string;
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        moviesFetching(state) {
            state.loading = true;
            state.error = '';
        },

        moviesFetchingSuccess(state, action: PayloadAction<Movie[]>) {
            state.loading = false;
            state.error = '';
            state.movies = action.payload;
        },

        moviesFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.movies = [];
        },

        addItem(state, action) {
            state.movieMore.push(action.payload)
        },

        InItem(state, action:pay) {
            state.movieMore.includes(action.payload)
        },

        nullItem(state) {
            state.movieMore = [];
        },

        addLike(state, action:pay) {
            const storedLikes = localStorage.getItem('likedMovies');
            if (storedLikes) {
                state.likeMovie = []
                state.likeMovie.push(...JSON.parse(storedLikes));
            } 
            if (action.payload) {
                state.likeMovie.push(action.payload)
                localStorage.setItem('likedMovies', JSON.stringify(state.likeMovie))
            }
        },
        
        removeLike(state, action) {
            state.likeMovie = state.likeMovie.filter(movie => movie.imdbID !== action.payload.imdbID);
            localStorage.setItem('likedMovies', JSON.stringify(state.likeMovie));
        }
    },

})

export default movieSlice.reducer;