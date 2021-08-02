import { useState, useEffect } from 'react';
import config from './config';

const KEY = config.key;

const useCities = (defaultSearchTerm) => {
    const [city, setCity] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${term}&appid=${KEY}`)
            .then(res => res.json())
            .then(result => {
                setCity(result);
            });
    };

    return [city, search];

};

export default useCities;