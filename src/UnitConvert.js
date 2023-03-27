import React, { useState } from "react";

export default function UnitConvert(props) {
  const [unit, setUnit] = useState("imperial");
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("convertFahrenheit");
  }
  function convertFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div>
        <span className="col-6 temp "> {props.farenheit}°</span>
        <span className="col-8 degreeChange ">
          <span className="Unit">
            F |{" "}
            <a href="/" onClick={convertCelsius}>
              C
            </a>{" "}
          </span>
        </span>
      </div>
    );
  } else {
    let celsiusTemperature = ((props.farenheit - 32) * 5) / 9;

    return (
      <div>
        <span className="col-6 temp "> {Math.round(celsiusTemperature)}°</span>
        <span className="col-8 degreeChange ">
          <span className="Unit">
            <a href="/" onClick={convertFarenheit}>
              F
            </a>{" "}
            | C
          </span>
        </span>
      </div>
    );
  }
}
