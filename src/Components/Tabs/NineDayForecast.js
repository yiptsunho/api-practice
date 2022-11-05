import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect, useRef } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';
import _ from 'lodash';

function createData(name, array) {
  const [first, second, third, forth, fifth, sixth, seventh, eighth, nineth] = array
  return { name, first, second, third, forth, fifth, sixth, seventh, eighth, nineth };
}

function NineDayForecast({ language }) {

  const [data, setData] = useState({})
  const dayArr = useRef(['#'])
  const iconArr = useRef([])
  const [rows, setRows] = useState([])
  // const headers = ['name', 'first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth']

  useEffect(() => {
    fetchData(`${WEATHER_API}?dataType=fnd&lang=${language}`, setData)
  }, [])

  useEffect(() => {
    // initialise day array
    if (Object.keys(data).length > 0 && dayArr.current.length < 10) {

      data.weatherForecast.forEach(day => {
        dayArr.current.push(day.week)
        iconArr.current.push(day.ForecastIcon)
        // newMinTempArr.push(day.forecastMintemp)
        // newMaxTempArr.push(day.forecastMaxtemp)

      })
    }
  }, [data])

  if (dayArr.current.length === 10 && rows.length === 0) {
    setRows([createData('Day', iconArr.current)])
  }
  // const rows = [
  //   createData('Day', dayArr),
  //   // createData('TC Info', iconArr),
  //   // createData('Fire Danger Warning', minTempArr),
  //   // createData('Forecast Period', maxTempArr),
  // ];

  return (
    <div>
      {rows.length === 1 &&
        <WeatherTable
          headers={dayArr.current}
          rows={rows}
          isNineDay={true} />
      }
    </div>
  )
};

export default NineDayForecast;
