import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const WeatherInfo = ({ weather }) => {
  const date = new Date();

  return (
    <>
      <div className="flex">
        <h3 className="color">
          {weather.name}, {weather.sys.country}
        </h3>
      </div>
      <p className="date color">
        {days[date.getDay()]}, {date.getHours()}:{date.getMinutes()}
      </p>
      <div className="center">
        <img  className="img" width={50} height={50} src="cloudy.png" alt="cloudy" />
        <h1 className="color">
          {parseFloat(weather.main.temp.toFixed(0))}
          <sup>o</sup>
        </h1>
        <p className="description color">{weather.weather[0].description}</p>
      </div>
    </>
  );
};

export default WeatherInfo;
