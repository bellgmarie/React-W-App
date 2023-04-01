import React from "react";
import Hollow from "./StickIcon";
import UnitConvert from "./UnitConvert";

export default function WeatherInfo(props) {
  return (
    <div className="extra">
      <div className="row " id="middle">
        <div className="col-5 " id="stickyImg">
          <Hollow code={props.data.icon} size={200} />
        </div>
        <div className="col-5 degreeTemp">
          <UnitConvert farenheit={props.data.temperature} />
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
