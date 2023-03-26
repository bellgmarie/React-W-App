import React from "react";
import Hollow from "./StickIcon";
export default function WeatherInfo(props) {
  return (
    <div className="extra">
      <div className="row " id="middle">
        <div className="col-5 " id="stickyImg">
          <Hollow code={props.data.icon} />
        </div>
        <div className="col-5 degreeTemp">
          <span className="col-6 temp "> {props.data.temperature}°</span>
          <span className="col-7 degreeChange">F | C</span>
        </div>
      </div>
      <div className="specifics text-capitalize">
        <ul>
          <li>Looks Like // {props.data.description}</li>
          <li>Humidity Level // {props.data.humidity} %</li>

          <li>Wind Speeds // {props.data.wind} mph</li>
        </ul>
      </div>
    </div>
  );
}
