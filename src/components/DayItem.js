import './DayItem.css';
import React from 'react';

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


const DayItem = ({ day }) => {
    const d = new Date(day.dt_txt);
    const date = d.getDate();
    const monthName = months[d.getMonth()];
    const iconurl = "http://openweathermap.org/img/wn/" + day.weather[0].icon + '@2x.png';
    return (
        <div className="day-item item column">
            
            <div className="header" style={{fontSize: "2.5rem", marginBottom: "20px", marginTop: "10px"}}>
                {days[d.getDay()]}
            </div>
            <div className="date">
                {`${date} ${monthName}, 3:00 PM`}
            </div>
            <img 
                alt={day.dt_txt}
                className="ui icon"
                src={iconurl}
            />
            <div className="header" style={{fontSize: "2.5rem"}}>
                {`${Math.round(day.main.temp-273.15)} ${'\u00b0'}C`}
            </div>

            <div className="description">
                {day.weather[0].description}
            </div>

        
        </div>
    );
};

export default DayItem;