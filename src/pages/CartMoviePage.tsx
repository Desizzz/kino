import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchOneMovie } from '../store/reducers/ActionsCreators';
import { movieSlice } from '../store/reducers/getMovie';

const CartMoviePage = () => {
    const { id } = useParams()
    const { movie, loading, error } = useAppSelector(state => state.oneMovieReducer)
    const { likeMovie } = useAppSelector(state => state.movieReducer)

    const dispatch = useAppDispatch()
    const addInLike = (movie: any) => {
        if (likeMovie.includes(movie)) return
        dispatch(movieSlice.actions.addLike(movie))
    }

    useEffect(() => {
        dispatch(fetchOneMovie(id))
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {movie && <h2>{movie.Title}</h2>}
            <img alt={movie.Title} src={movie.Poster} />
            <p>Year: {movie.Year}</p>
            <p>BoxOffice: {movie.BoxOffice}</p>
            <p>Director: {movie.Director}</p>
            <p>Rated: {movie.Rated}</p>
            <p>imdbRating: {movie.imdbRating}</p>
            <div className='addLike' onClick={() => addInLike(movie)}>Добавить в избранное</div>
        </div>
    );
};

export default CartMoviePage;