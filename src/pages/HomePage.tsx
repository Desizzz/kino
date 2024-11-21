import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchMovie } from '../store/reducers/ActionsCreators';
import { Link, useParams } from 'react-router-dom';
import Search from '../components/Search';
import ListItem from '../components/ListItem';

const HomePage = () => {
    const [valueInp, setValueInp] = useState('')
    const [data, setData] = useState(valueInp)

    useEffect(() => {
        const storedValue = localStorage.getItem('data');
        if (storedValue) {
            setData(storedValue);
            localStorage.setItem('data', '');
        }
    }, []);

    useEffect(() => {
        if(data) { 
            localStorage.setItem('data', data);
        }
    }, [data]);

    return (
        <div>
            <Search setData={setData} data={data} valueInp={valueInp} setValueInp={setValueInp}/>
            <Link className='likes' to={'Likes'}>Избранное</Link>
            <ListItem data={data}/>
        </div>
    );
};

export default HomePage;