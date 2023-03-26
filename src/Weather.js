import React, { useState } from "react";
import axios from "axios";
import Hey from "./AccuDate";
import StickyForecast from "./StickyForecast";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ result: false });
  const [name, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      result: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "d9faaf790769cf330ba3622ee099020a";
    // https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=d9faaf790769cf330ba3622ee099020a
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.result) {
    return (
      <div className="App ">
        <div className="container">
          <div className=" pattern ">
            <div>
              <h1 className="title">{weatherData.name}</h1>
              <div className=" dateTime">
                <Hey date={weatherData.date} />
              </div>
              <br />
              <div className="row">
                <div className="topSearch">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="search"
                      placeholder="Enter a City.."
                      id="placeSearch"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />

                    <input id="placeButton" type="submit" value="Search" />
                  </form>
                </div>
                <WeatherInfo data={weatherData} />
              </div>
            </div>
          </div>
          <h1 className="credit">
            {"Hosted by Netlify. Coded by "}
            <a
              href="https://github.com/bellgmarie"
              target="_blank"
              rel="noreferrer"
            >
              {"Bell Marie."}
            </a>
          </h1>
        </div>
        <StickyForecast />{" "}
      </div>
    );
  } else {
    search();
    return "Yippie!...";
  }
}
