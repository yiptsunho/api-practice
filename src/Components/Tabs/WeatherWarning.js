import React from 'react';
import { fetchData, createData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function WeatherWarning({ language }) {

    const [data, setData] = useState("")
    
    useEffect(() => {
        fetchData(`${WEATHER_API}?dataType=warningInfo&lang=${language}`,setData)
        console.log(data)
    }, [])
    
    const rows = [
        //createData('Warning', data.details[0].contents),
        //createData('Warning Code', data.details[0].warningStatementCode),
        //createData('Update Time', data.details[0].updateTime),
    ];

  return (
    <div>
      <WeatherTable rows={rows}/>
    </div>
  )
};

export default WeatherWarning;
