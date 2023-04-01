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
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      name: response.data.city,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
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
    const apiKey = "f0fc91db3aoa04a9t8419fe6b4378f88";

    //https://api.shecodes.io/weather/v1/current?query=${name}&key=${apiKey}&units=imperial
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${name}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.result) {
    return (
      <div className="App ">
        <div className="container">
          <div className=" pattern ">
            <div>
              <h1 className="title">{weatherData.name}</h1>
              <div>
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
        <StickyForecast name={weatherData.name} />{" "}
      </div>
    );
  } else {
    search();
    return "Yippie!...";
  }
}
