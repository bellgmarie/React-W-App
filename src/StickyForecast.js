import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./ForecastDay";

export default function StickyForecast(props) {
  let [loaded, setLoad] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.data.name]);
  //hmmm ^ or rpops.name
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="stickyNote">
        <div className="note" id="first">
          <WeatherForecastDay data={forecast[0]} />
        </div>

        <div className="note" id="second">
          <WeatherForecastDay data={forecast[1]} />
        </div>

        <div className="note" id="third">
          <WeatherForecastDay data={forecast[2]} />
        </div>

        <div className="note" id="fourth">
          <WeatherForecastDay data={forecast[3]} />
        </div>

        <div className="note " id="last">
          <div className="weatherForeStickyOne">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f0fc91db3aoa04a9t8419fe6b4378f88";
    let name = props.data.name;
    //^^^is this calling too mucH ? changedfrom props.data.name
    //https://api.shecodes.io/weather/v1/forecast?query=new york&key=f0fc91db3aoa04a9t8419fe6b4378f88&units=imperial
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${name}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
