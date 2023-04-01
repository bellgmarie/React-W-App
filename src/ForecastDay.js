import React from "react";
import Hollow from "./StickIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Sunady",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="weatherForeSticky">
      <div className="weatherForeDay"> {day()}</div>
      <Hollow code={props.data.condition.icon} />
      <div className="WeatherForeTemp">
        <span className="max">
          {maxTemp()} / {minTemp()}
        </span>
      </div>
    </div>
  );
}
