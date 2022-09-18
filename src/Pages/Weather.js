import React, { useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import WeatherForecast from '../Components/Tabs/WeatherForecast';
import WeatherWarning from '../Components/Tabs/WeatherWarning';
import CurrentWeather from '../Components/Tabs/CurrentWeather';
import NineDayForecast from '../Components/Tabs/NineDayForecast';

export async function fetchData(url, setState) {
  await fetch(url)
  .then(response => response.json())
  .then(actualData => {
    setState(actualData)
  })
}

export function createData(name, description) {
  return { name, description };
}

function Weather() {

  const [value, setValue] = useState(0);
  const [tabContent, setTabContent] = useState("")
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    setTabContent(<WeatherForecast language={language}/>)
  }, [])

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
    
    if (newValue === 0) {
      setTabContent(<WeatherForecast language={language}/>)
    } else if (newValue === 1) {
      setTabContent(<CurrentWeather language={language}/>)
    } else if (newValue === 2) {
      setTabContent(<WeatherWarning language={language}/>)
    } else if (newValue === 3) {
      setTabContent(<NineDayForecast language={language}/>)
    }
  }

  const handleChangeLanguage = () => {
    //
  }

  return (
    <>
      <div className="App-header dark">
        <div className="container">
          <h1>Weather</h1>
        </div>
      </div>
      <Box className="container">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          centered>

          <Tab label="Weather Forecast" />
          <Tab label="Current Weather" />
          <Tab label="Weather Warning" />
          <Tab label="9-Day Forecast" />
        </Tabs>
        {tabContent}
      </Box>
    </>
  )
};

export default Weather;