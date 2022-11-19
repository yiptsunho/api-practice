import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect, useRef } from 'react';
import WeatherTable from '../WeatherTable';
import * as constants from '../Constants';

function createData(name, description) {
  return { name, description };
}

function CurrentWeather({ language }) {

  const [data, setData] = useState("")
  const headers = ['name', 'description']
  const humidityArr = useRef([])
  const rainfallArr = useRef([])
  const temperatureArr = useRef([])
  const uvArr = useRef([])
  const warningArr = useRef([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetchData(`${constants.WEATHER_API}?dataType=rhrread&lang=${language}`, setData)
  }, [])

  useEffect(() => {
    // initialise day array
    if (Object.keys(data).length > 0) {

      for (let humidity of data.humidity.data) {
        humidityArr.current.push(`${humidity.place}: ${humidity.value} °${humidity.unit}`)
      }
      for (let rainfall of data.rainfall.data) {
        rainfallArr.current.push(`${rainfall.place}: ${rainfall.max} °${rainfall.unit}`)
      }
      for (let temperature of data.temperature.data) {
        temperatureArr.current.push(`${temperature.place}: ${temperature.value} °${temperature.unit}`)
      }
      if (data.uvindex !== '') {
        for (let uvIndex of data.uvindex.data) {
          uvArr.current.push(`${uvIndex.place}: ${uvIndex.value}`)
        }
      }
      if (data.warningMessage !== '') {
        for (let warningMessage of data.warningMessage) {
          warningArr.current.push(warningMessage)
        }
      }
      // data.weatherForecast.forEach(day => {
      //   dayArr.current.push(day.week)
      //   iconArr.current.push(day.ForecastIcon)
      //   minTempArr.current.push(`${day.forecastMintemp.value} °${day.forecastMintemp.unit}`)
      //   maxTempArr.current.push(`${day.forecastMaxtemp.value} °${day.forecastMaxtemp.unit}`)
      //   windArr.current.push(day.forecastWind)
      // })
    }
  }, [data])

  if (humidityArr.current.length > 0 && rows.length === 0) {
    setRows([
      createData('Temperature', temperatureArr.current),
      createData('Humidity', humidityArr.current),
      createData('rainfall', rainfallArr.current),
      createData('UV Index', uvArr.current),
      createData('Warning Message', warningArr.current),
    ]);
  }

  return (
    <div>
      {rows.length > 0 &&
        <WeatherTable
          headers={headers}
          rows={rows}
          isCurrentWeather={true}
        />
      }
    </div>
  )
};

export default CurrentWeather;
