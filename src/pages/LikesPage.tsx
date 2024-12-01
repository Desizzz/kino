import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Link } from 'react-router-dom';
import { CgArrowLeftR } from "react-icons/cg";
import { movieSlice } from '../store/reducers/getMovie';

export const LikesPage = () => {
    let { likeMovie } = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieSlice.actions.addLike())
    }, []);

    const remLike = (movie: any) => {
        dispatch(movieSlice.actions.removeLike(movie));
    }

    return (
        <div>
            <div className='ml-5'>
                <Link className='likes' to={'/'}><CgArrowLeftR /></Link>
            </div>
            <div className='flex flex-wrap w-screen'>
                {likeMovie && likeMovie.map(mov => (
                    <div key={mov.imdbID} className="w-1/2 container px-5 py-8 " >
                        <div className="flex flex-wrap -m-4" >
                            <div className=" p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                                    <img className="w-full object-cover object-center" src={mov.Poster} alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{mov.Title}</h1>
                                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" >
                                                <p>Learn More</p>
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className='text-red-400' onClick={() => remLike(mov)}> удалить </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
