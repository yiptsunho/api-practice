import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function createData(name, description) {
  return { name, description };
}

function CurrentWeather({ language }) {

  const [data, setData] = useState("")

  useEffect(() => {
    fetchData(`${WEATHER_API}?dataType=fnd&lang=${language}`, setData)
  }, [])

  console.log(data)

  const rows = [
    // createData('Temperature', data.temperature.data),
    // createData('Humidity', data.humidity.data),
    // createData('Rainfall', data.rainfall.data),
    // createData('UV Index', data.forecastPeriod),
    // createData('Warning Message', data.warningMessage[0]),
  ];

  return (
    <div>
      <WeatherTable rows={rows} />
    </div>
  )
};

export default CurrentWeather;
