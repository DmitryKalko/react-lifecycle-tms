import React from "react";
import axios from "axios";

import WeatherToday from "./components/WeatherToday";
import WeatherOthers from "./components/WeatherOthers";

const url = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247";

class WeatherApp extends React.Component {
  state = {
    weather: null,
  };

  componentDidMount() {
    axios.get(`${url}`).then((response) => {
      const weather = response.data;
      console.log(weather);
      this.setState({ weather });
    });
    
    // потом
    document.addEventListener("mousemove", this.mouseListener);
  }

  // потом
  mouseListener = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y);
  };

  // потом
  componentDidUpdate(prevProps, prevState) {
    // если нам пришли например новые пропсы или изменился стэйт
    // и исходя из этого нам нужно сделать новый запрос на сервер
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID); // запрос за новыми данными
    }
  }

  // потом
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseListener);
    console.log("компонент размонтирован + произошла отписка");
    // будет работать когда мы например что то нажмем и на странице появится другой компонент
    // а этот размонтируется. то только если это не главный компонент, как в этом случае
  }

  render() {
    const { weather } = this.state;

    if (!weather) {
      return <div>ЗАГРУЗКА</div>;
    }

    return (
      <>
        <WeatherToday weather={weather} />
        <WeatherOthers weather={weather} />
      </>
    );
  }
}

export default WeatherApp;
