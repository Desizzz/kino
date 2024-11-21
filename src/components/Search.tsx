import React, { useState } from 'react';
import Button from './button';
import Input from './input';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { movieSlice } from '../store/reducers/getMovie';

interface PropsSearch {
    setData: (value: string) => void;
    data: string;
    valueInp: string;
    setValueInp: (value: string) => void
}

const Search: React.FC<PropsSearch> = ({setData,data , valueInp, setValueInp}) => {
    const dispatch = useAppDispatch()
    const useSelector = useAppSelector(state => state.movieReducer)
    

    const PushData = () => {
        setData(valueInp)
        
        dispatch(movieSlice.actions.nullItem())
    }
    return (
        <>
            <Input valueInp={valueInp} setValueInp={setValueInp}/>
            <Button PushData={PushData}>Искать</Button>
        </>
    );
};

export default Search;