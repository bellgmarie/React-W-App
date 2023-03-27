import React from "react";

export default function Hey(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "December",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let year = [props.date.getFullYear()];
  let hours = addZero(props.date.getHours());
  let minutes = addZero(props.date.getMinutes() + 9);
  let number = [props.date.getUTCDate()];

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  return (
    <h2 className="dateTime">
      Today's Date: {day} {month} {number}, {year}
      <br /> Today's Time: {hours} : {minutes}
    </h2>
  );
}
