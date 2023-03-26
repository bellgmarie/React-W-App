import React, { useState } from "react";

export default function UnitConvert(props) {
  const [unit, setUnit] = useState("imperial");
  if (unit === "imperial") {
    return (
      <div>
        <span className="col-6 temp "> {props.farenheit}°</span>
        <span className="col-8 degreeChange ">
          <span className="unit">
            F | <a href="/">C</a>{" "}
          </span>
        </span>
      </div>
    );
  } else {
    return "F";
  }
}
