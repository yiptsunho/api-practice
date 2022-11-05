import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function createData(header, array) {
  const [...unpackedData] = array
  console.log(unpackedData)
  return { header, unpackedData };
}

function NineDayForecast({ language }) {

  const [data, setData] = useState({})
  var dayArr = []
  var iconArr = []
  var minTempArr = []
  var maxTempArr = []

  useEffect(() => {
    fetchData(`${WEATHER_API}?dataType=fnd&lang=${language}`, setData)
  }, [])

  useEffect(() => {
    // initialise day array
    if (Object.keys(data).length > 0) {

      data.weatherForecast.forEach(day =>
        dayArr.push(day.week)
      )

      data.weatherForecast.forEach(day =>
        iconArr.push(day.ForecastIcon)
      )

      data.weatherForecast.forEach(day =>
        minTempArr.push(day.forecastMintemp)
      )

      data.weatherForecast.forEach(day =>
        maxTempArr.push(day.forecastMaxtemp)
      )
    }
  }, [data])

  console.log(dayArr)
  console.log(iconArr)
  console.log(minTempArr)
  console.log(maxTempArr)

  const rows = [
    createData('Day', dayArr),
    createData('TC Info', iconArr),
    createData('Fire Danger Warning', minTempArr),
    createData('Forecast Period', maxTempArr),
  ];

  return (
    <div>
      <WeatherTable rows={rows} />
    </div>
  )
};

export default NineDayForecast;
