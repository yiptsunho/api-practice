import React from 'react';
import { fetchData } from '../../Pages/Weather';
import { useState, useEffect } from 'react';
import WeatherTable from '../WeatherTable';
import * as constants from '../Constants';

function createData(name, description) {
  return { name, description };
}

function WeatherForecast({ language }) {

  const [data, setData] = useState("")
  const headers = ['name', 'description']

  useEffect(() => {
    fetchData(`${constants.WEATHER_API}?dataType=flw&lang=${language}`, setData)
  }, [])

  let rows;

  if (Object.keys(data).length > 0) {
    rows = [
      createData('General Situation', data.generalSituation),
      createData('TC Info', data.tcInfo),
      createData('Fire Danger Warning', data.fireDangerWarning),
      createData('Forecast Period', data.forecastPeriod),
      createData('Forecast Description', data.forecastDesc),
      createData('Outlook', data.outlook),
      createData('Update Time', data.updateTime),
    ];
  }

  return (
    <div>
      {rows && rows.length > 0 &&
        <WeatherTable
          headers={headers}
          rows={rows} />
      }
    </div>
  )
};

export default WeatherForecast;
