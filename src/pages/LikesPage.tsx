import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Link } from 'react-router-dom';
import { movieSlice } from '../store/reducers/getMovie';

const LikesPage = () => {
    let {likeMovie} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(movieSlice.actions.addLike())
    }, []);
            
    const remLike = (movie: any) => {
        dispatch(movieSlice.actions.removeLike(movie));
    }
    
    return (
        <div>
            <Link className='likes' to={'/'}>Home</Link>
            {likeMovie && likeMovie.map(movie => (
                <div key={movie.imdbID}>
                    <Link to={`/CartMoviePage/${movie.imdbID}`}>
                        <img src={movie.Poster} alt="" />
                        <p>{movie.Title}</p>
                    </Link>
                    <div onClick={() => remLike(movie)}> удалить </div>
                </div>
            ))}
        </div>
    );
};

export default LikesPage;