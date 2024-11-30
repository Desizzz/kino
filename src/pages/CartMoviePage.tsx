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
            {movie && <h2>{ }</h2>}

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src={movie.Poster} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="text-[50px] flex-grow">
                                <h2 className="text-[50px] text-gray-900 text-lg title-font font-medium mb-3">{movie.Title}</h2>
                                <p className="text-[40px] leading-relaxed text-base">{movie.Year}</p>
                                <p className="text-[40px] leading-relaxed text-base">{movie.BoxOffice}</p>
                                <p className="text-[40px] leading-relaxed text-base">{movie.Director}</p>
                                <p className="text-[40px] leading-relaxed text-base">{movie.Rated}</p>
                                <p className="text-[40px] leading-relaxed text-base">{movie.imdbRating}</p>
                                <a className="mt-3 text-green-500 inline-flex items-center">
                                    <div className='addLike' onClick={() => addInLike(movie)}>Добавить в избранное</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartMoviePage;