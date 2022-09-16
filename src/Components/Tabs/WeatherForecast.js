import React from 'react';
import { fetchData, createData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function WeatherForecast({ language }) {

    const [data, setData] = useState("")
    
    useEffect(() => {
        fetchData(`${WEATHER_API}?dataType=flw&lang=${language}`,setData)
        console.log(data)
    }, [])
    
    const rows = [
        createData('General Situation', data.generalSituation),
        createData('TC Info', data.tcInfo),
        createData('Fire Danger Warning', data.fireDangerWarning),
        createData('Forecast Period', data.forecastPeriod),
        createData('Forecast Description', data.forecastDesc),
        createData('Outlook', data.outlook),
        createData('Update Time', data.updateTime),
    ];

  return (
    <div>
      <WeatherTable rows={rows}/>
    </div>
  )
};

export default WeatherForecast;
