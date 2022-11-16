import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import * as constants from '../Constants';

function createData(name, description) {
  return { name, description };
}

function WeatherWarning({ language }) {

  const [data, setData] = useState("")
  const headers = ['name', 'description']

  useEffect(() => {
    fetchData(`${constants.WEATHER_API}?dataType=warnsum&lang=${language}`, setData)

  }, [])

  const rows = [
    // createData('Warning', data.details[0].contents),
    // createData('Warning Code', data.details[0].warningStatementCode),
    // createData('Update Time', data.details[0].updateTime),
  ];

  return (
    <div>
      {rows.length > 0 &&
        <WeatherTable
          headers={headers}
          rows={rows} />
      }
    </div>
  )
};

export default WeatherWarning;
