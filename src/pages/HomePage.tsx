import React, { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { ListItem } from '../components/ListItem';

export const HomePage = () => {
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
        if (!data) return
        localStorage.setItem('data', data);
    }, [data]);

    return (
        <div>
            <Search setData={setData} data={data} valueInp={valueInp} setValueInp={setValueInp} />

            <ListItem data={data} />
        </div>
    );
};