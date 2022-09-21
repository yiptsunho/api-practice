import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import WEATHER_API from '../Constants';

function createData(name, description) {
  return { name, description };
}

function WeatherWarning({ language }) {

  const [data, setData] = useState("")

  useEffect(() => {
    fetchData(`${WEATHER_API}?dataType=warningsum&lang=${language}`, setData)

  }, [])

  const rows = [
    // createData('Warning', data.details[0].contents),
    // createData('Warning Code', data.details[0].warningStatementCode),
    // createData('Update Time', data.details[0].updateTime),
  ];

  return (
    <div>
      <WeatherTable rows={rows} />
    </div>
  )
};

export default WeatherWarning;
