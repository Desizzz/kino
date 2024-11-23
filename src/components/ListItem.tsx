import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMovie, fetchOneMovie } from '../store/reducers/ActionsCreators';
import { Link } from 'react-router-dom';

interface PropsList {
    data: string;
}

const ListItem: React.FC<PropsList> = ({ data }) => {

    const [sorting, setSorting] = useState('noSort')
    const { movies, loading, error, movieMore } = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    const sortedMovies = [...movieMore]

    useEffect(() => {
        dispatch(fetchMovie(data))
    }, [data])

    useEffect(() => {
        console.log(movies, movieMore)
        movies.map((m) => {
            console.log(m.Title)
            dispatch(fetchOneMovie(m.imdbID))
        })
    }, [movies])


    if (sorting === 'new') {
        sortedMovies.sort((a, b) => {
            console.log(movieMore)
            return b.Year.localeCompare(a.Year)
        })

    } else if (sorting === 'old') {
        sortedMovies.sort((a, b) => {
            console.log(a.Year, b.Year)
            return a.Year.localeCompare(b.Year)
        })

    } else if (sorting === 'reting') {
        sortedMovies.sort((a, b) => {
            console.log(a.imdbRating, b.imdbRating)
            return b.imdbRating.localeCompare(a.imdbRating)
        })
    }

    return (
        <>
            {loading && data && <p>Loading...</p>}
            {error && <h1>нет данных</h1>}
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value='new'>Новые</option>
                <option value='old'>Старые</option>
                <option value="reting">Рейтинг</option>
                <option value="noSort">Без сортировки</option>
            </select>
            {movieMore && sortedMovies.map(mov => (
                <div className='itemMovie' key={mov.imdbID}>
                    <Link className='title' to={`CartMoviePage/${mov.imdbID}`}>
                        <img src={mov.Poster} alt={mov.Title} />
                        <h3 >{mov.Title}</h3>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default ListItem;