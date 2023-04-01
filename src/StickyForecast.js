import React from "react";
import Hollow from "./StickIcon";
import axios from "axios";

export default function StickyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "f0fc91db3aoa04a9t8419fe6b4378f88";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.name}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="stickyNote">
      <div className="note" id="first">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note" id="second">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note" id="third">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note" id="fourth">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note " id="last">
        <div className="weatherForeSticky">
          <div className="specialSticky">
            <div className="weatherForeDay"> friday </div>

            <Hollow code="01d" size={200} />
            <div className="WeatherForeTemp">
              <span className="max">19</span>° / <span className="min">19</span>
              °
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
  function getForecast(coordinates) {
    console.log(coordinates);
    let apiKey = "f0fc91db3aoa04a9t8419fe6b4378f88";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${name}n&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecasts);
    console.log(apiUrl);
  }
  function displayForecasts(response) {
    let forecast = response.data.daily;
    console.log(forecast);
  }
*/
