import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function createData(column, day1, day2, day3, day4, day5, day6, day7) {
  return { column, day1, day2, day3, day4, day5, day6, day7 };
}

function NineDayForecast({ language }) {

    const [data, setData] = useState("")
    
    useEffect(() => {
        fetchData(`${WEATHER_API}?dataType=fnd&lang=${language}`,setData)
        console.log(data)
    }, [])
    
    data.weatherForecast.forEach(day => day.week)

    const rows = [
        //createData('Day', data.weatherForecast.forEach(day => day.week)),
        // createData('TC Info', data.tcInfo),
        // createData('Fire Danger Warning', data.fireDangerWarning),
        // createData('Forecast Period', data.forecastPeriod),
        // createData('Forecast Description', data.forecastDesc),
        // createData('Outlook', data.outlook),
        // createData('Update Time', data.updateTime),
    ];

  return (
    <div>
      <WeatherTable rows={rows}/>
    </div>
  )
};

export default NineDayForecast;
