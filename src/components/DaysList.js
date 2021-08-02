import React from 'react';
import DayItem from './DayItem';


const DaysList = ({ days }) => {
    const renderedList = days ? days.map((day) => {
        return (
            <DayItem
                key={day.dt}
                day={day}
            />

        );
    }) : null;
    return <div className="ui relaxed list two row">{renderedList}</div>;
};

export default DaysList;