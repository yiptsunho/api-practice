import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect, useRef } from 'react';
import WeatherTable from '../WeatherTable';
import * as constants from '../Constants';
import _ from 'lodash';

function createData(name, results) {
  return { name, results };
}

function NineDayForecast({ language }) {

  const [data, setData] = useState({})
  const dayArr = useRef(['#'])
  const iconArr = useRef([])
  const minTempArr = useRef([])
  const maxTempArr = useRef([])
  const windArr = useRef([])
  const [rows, setRows] = useState([])
  // const headers = ['name', 'first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth']

  useEffect(() => {
    fetchData(`${constants.WEATHER_API}?dataType=fnd&lang=${language}`, setData)
  }, [])

  useEffect(() => {
    // initialise day array
    if (Object.keys(data).length > 0 && dayArr.current.length < 10) {

      data.weatherForecast.forEach(day => {
        // if (day.week !== '' && day.week !== null) {
        //   dayArr.current.push(day.week)
        // }
        // if (day.ForecastIcon !== '' && day.ForecastIcon !== null) {
        //   dayArr.current.push(day.ForecastIcon)
        // }
        // if (day.forecastMintemp.value !== '' && day.forecastMintemp.value !== null &&
        //   day.forecastMintemp.unit !== '' && day.forecastMintemp.unit !== null) {
        //   dayArr.current.push(forecastMintemp)
        // }
        // if (day.forecastMaxtemp.value !== '' && day.forecastMaxtemp.value !== null
        //   && day.forecastMaxtemp.unit !== '' && day.forecastMaxtemp.unit !== null) {
        //   dayArr.current.push(day.forecastMaxtemp)
        // }
        // if (day.forecastWind !== '' && day.forecastWind !== null) {
        //   dayArr.current.push(day.forecastWind)
        // }
        dayArr.current.push(day.week)
        iconArr.current.push(day.ForecastIcon)
        minTempArr.current.push(`${day.forecastMintemp.value} °${day.forecastMintemp.unit}`)
        maxTempArr.current.push(`${day.forecastMaxtemp.value} °${day.forecastMaxtemp.unit}`)
        windArr.current.push(day.forecastWind)
      })
    }
  }, [data])

  if (dayArr.current.length === 10 && rows.length === 0) {
    setRows([
      createData('Icon', iconArr.current),
      createData('Min Temperature', minTempArr.current),
      createData('Max Temperature', maxTempArr.current),
      createData('Wind', windArr.current),
    ])
  }

  return (
    <div>
      {rows.length === 4 &&
        <WeatherTable
          headers={dayArr.current}
          rows={rows}
          isNineDay={true} />
      }
    </div>
  )
};

export default NineDayForecast;
