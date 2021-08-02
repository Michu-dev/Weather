import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import useCities from '../hooks/useCities';
import DaysList from './DaysList';


const App = () => {
    const [city, search] = useCities('Opalenica');
    const [selectedDays, setSelectedDays] = useState(null);

    function isRight(element, index, array) {
      const da = new Date(element.dt_txt);
      return da.getHours() === 15;
    }

    useEffect(() => {
        setSelectedDays(city.list ? city.list.filter(isRight): null);
        
    }, [city]);
    
    const cityName = city.city ? city.city.name : ''; 
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui teal inverted center aligned segment">
                <h1 className="ui header center" style={{fontSize: "4rem"}}>
                    5-day Weather
                </h1>
                <h3 className="ui header center" style={{fontSize: "2rem"}}>
                    City: {cityName}
                </h3>
            </div>
            
          
            <div className="ui five column grid center aligned segment" style={{border: "0", boxShadow: "0 0 0 0"}}>
                
                  
                    <DaysList days={selectedDays} />
                
                
            </div>
            <div className="ui teal inverted center aligned segment">
                <h1 className="ui header center" style={{fontSize: "4rem"}}>
                    Have a nice day
                </h1>
            </div>

        </div>
    );

};

export default App;


/*import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      
    </div>
  );
}*/


