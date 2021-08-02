import axios from 'axios';

REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = Paste your API key here.
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
const KEY = '06a61fbab9fa2a2409fe0fb7a99cca1b';

export default axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/forecast?id=524901&`,
    params: {
        city_name: 'Poznan',
        maxResult: 5,
        appid: KEY
    }
});