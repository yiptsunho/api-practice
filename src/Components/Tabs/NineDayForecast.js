import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function createData(header, array) {
  const [...unpack] = array
  console.log(unpack)
  return { header, unpack };
}

function NineDayForecast({ language }) {

  const [data, setData] = useState("")

  useEffect(() => {
    fetchData(`${WEATHER_API}?dataType=fnd&lang=${language}`, setData)
  }, [])

  console.log(data)
  var dayArr = []
  data.weatherForecast.forEach(day =>
    dayArr.push(day.week)
  )

  // var iconArr = []
  // data.weatherForecast.forEach(day =>
  //   iconArr.push(day.ForecastIcon)
  // )

  // var minTempArr = []
  // data.weatherForecast.forEach(day =>
  //   minTempArr.push(day.forecastMintemp)
  // )

  // var maxTempArr = []
  // data.weatherForecast.forEach(day =>
  //   maxTempArr.push(day.forecastMaxtemp)
  // )

  // console.log(dayArr)
  // console.log(iconArr)
  // console.log(minTempArr)
  // console.log(maxTempArr)

  // const rows = [
  //   createData('Day', dayArr),
  //   createData('TC Info', iconArr),
  //   createData('Fire Danger Warning', minTempArr),
  //   createData('Forecast Period', maxTempArr),
  // ];

  return (
    <div>
      {/* <WeatherTable rows={rows} /> */}
    </div>
  )
};

export default NineDayForecast;
