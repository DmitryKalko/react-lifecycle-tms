import moment from "moment";
import "./style.css";

const WeatherToday = (props) => {
  const { weather } = props;

  const time = moment().format("HH:MM");
  const degValue = weather.list[0].wind.deg;
  let degWind = "";
  if (degValue >= 0 && degValue < 10) {
    degWind = "North";
  } else if (degValue >= 10 && degValue < 80) {
    degWind = "North-East";
  } else if (degValue >= 80 && degValue < 100) {
    degWind = "East";
  } else if (degValue >= 100 && degValue < 170) {
    degWind = "South-East";
  } else if (degValue >= 170 && degValue < 190) {
    degWind = "South";
  } else if (degValue >= 190 && degValue < 260) {
    degWind = "South-West";
  } else if (degValue >= 260 && degValue < 280) {
    degWind = "West";
  } else if (degValue >= 280 && degValue < 350) {
    degWind = "North-West";
  } else {
    degWind = "North";
  }

  return (
    <div className="main-block">
      <div className="container">
        <div className="wrapper">
          <p className="geo-weather">{weather.city.name + ", " + weather.city.country} </p>
          <p className="time-weather"> {time}</p>
        </div>

        <div className="flex-container-1">
          <p className="icon-place">
            <img
              src={"http://openweathermap.org/img/w/" + weather.list[0].weather[0].icon + ".png"}
              alt="icon"
            />
          </p>
          <h4>{weather.list[0].weather[0].main}</h4>
          <h2>{Math.floor(weather.list[0].main.temp - 273, 15) + " °C"}</h2>
          <ul className="wind">
            <li>{degWind}</li>
            <li>{Math.floor(weather.list[0].wind.speed) + "m/s"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
