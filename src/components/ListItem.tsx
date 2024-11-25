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

    const sortMap: any = {
        new: (a: any, b: any) => b.Year.localeCompare(a.Year),
        old: (a: any, b: any) => a.Year.localeCompare(b.Year),
        reting: (a: any, b: any) => b.imdbRating.localeCompare(a.imdbRating),
        onSort: () => 0
    }

    if (loading && data) <p>Loading...</p>
    return (
        <>
            {error && <h1>нет данных</h1>}
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value='new'>Новые</option>
                <option value='old'>Старые</option>
                <option value="reting">Рейтинг</option>
                <option value="noSort">Без сортировки</option>
            </select>
            {movieMore && [...movieMore].sort(sortMap[sorting]).map(mov => (
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