import React from 'react';
import { fetchData, createData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function CurrentWeather({ language }) {

    const [data, setData] = useState("")
    
    useEffect(() => {
        fetchData(`${WEATHER_API}?dataType=rhrread&lang=${language}`,setData)
        console.log(data)
    }, [])
    
    const rows = [
        //createData('Temperature', data.temperature.data),
        //createData('Humidity', data.humidity.data),
        //screateData('Rainfall', data.rainfall.data),
        //createData('UV Index', data.forecastPeriod),
        //createData('Warning Message', data.warningMessage[0]),
    ];

  return (
    <div>
      <WeatherTable rows={rows}/>
    </div>
  )
};

export default CurrentWeather;
