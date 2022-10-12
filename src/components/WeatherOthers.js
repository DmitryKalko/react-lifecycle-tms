import WeatherItem from "./WeatherItem";
import "./style.css";

const WeatherOthers = (props) => {
  const { weather } = props;

  const list = weather.list.filter((day, index) => index % 8 === 0);

  const days = list.map(day => <WeatherItem key={day.dt} {...day} />);
  return (
    <div className="block-days">
      <div className="container">
        <div className="flex-container-2">{days}</div>
      </div>
    </div>
  );
};

export default WeatherOthers;
