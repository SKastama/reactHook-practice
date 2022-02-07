import React, {useState, useMemo } from 'react';

const Dashboard = () => {
    const [query, setQuery] = useState('');
    const [number, setNumber] = useState(0);

    const lengthString = (query) => {
        console.log('length counted')
        return query.length;
    }
    const addSum = (number) => {
        console.log('number added')
        return number + number
    }
    
    const returnedLength = useMemo(() => lengthString(query), [query])
    const returnedSum = useMemo(() => addSum(number), [number])


    return (
        <>
            <input className='border-0' type='text' name='query' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <h1>{returnedLength}</h1>
            <input className='border-0' type='number' name='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
            <h1>{returnedSum}</h1>
        </>
    )
}

export default Dashboard;