import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMovie, fetchOneMovie } from '../store/reducers/ActionsCreators';
import { Link } from 'react-router-dom';

interface PropsList {
    data: string;
}

export const ListItem: React.FC<PropsList> = ({ data }) => {

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
            <select className='ml-4' value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value='new'>Новые</option>
                <option value='old'>Старые</option>
                <option value="reting">Рейтинг</option>
                <option value="noSort">Без сортировки</option>
            </select>
            {error && <h1>Нет данных</h1>}
            <div className='flex flex-wrap w-screen'>
                {movieMore && [...movieMore].sort(sortMap[sorting]).map(mov => (
                    <div key={mov.imdbID} className="w-1/2 " >
                        <div className="flex flex-wrap m-auto" >
                            <div className="p-4 md:w-1/2">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                                    <img className="w-full object-cover object-center" src={mov.Poster} alt="blog" />
                                    <div className="p-6">
                                        <Link className='title' to={`CartMoviePage/${mov.imdbID}`}>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{mov.Title}</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <div className="flex items-center flex-wrap ">
                                                <div className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" >
                                                    <p>Learn More</p>
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};