import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";

import "./App.scss";
import WeatherCard from "./weather/WeatherCard";
import fetchWeather from "./utils/api";
import iconInfo from "./utils/iconInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.city = React.createRef();
    this.state = {
      city: "Indore",
      searchedCity: "Indore",
      weekWeather: [],
      showLoader: true
    };
  }

  componentWillMount() {
    this.getWeather();
  }

  getWeather = async (searchedCity = this.state.city) => {
    let weather = [],
      showLoader = true;
    await fetchWeather(searchedCity)
      .then(response => {
        weather = response.list.map(dayWeather => {
          return {
            dayWeather,
            country: response.city.country,
            city: response.city.name
          };
        });
        showLoader = false;
      })
      .catch(error => {
        showLoader = false;
        console.log("error", error);
      });

    const { color } = iconInfo(weather[0].dayWeather.weather[0].id);
    this.setState({
      weekWeather: weather,
      city: searchedCity,
      searchedCity,
      color,
      showLoader
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const searchedCity = this.city.current.value;

    if (searchedCity === this.state.city) {
      return;
    }
    this.getWeather(searchedCity);
  };

  render() {
    const { weekWeather, color, searchedCity, showLoader } = this.state;

    if (weekWeather.length === 0 && showLoader) {
      return (
        <div className="loader">
          <ScaleLoader
            height={40}
            width={10}
            margin={"6px"}
            radius={5}
            color={"#357C6D"}
            loading={showLoader}
          />
        </div>
      );
    } else if (weekWeather.length === 0 && !showLoader) {
      return <div>No weather data</div>;
    }

    const InputForm = () => (
      <form onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <legend>Enter your city</legend>
          <input
            className="form-input"
            type="text"
            ref={this.city}
            defaultValue={searchedCity}
          />
        </fieldset>
      </form>
    );

    return (
      <div className="weather-container" style={{ backgroundColor: color }}>
        <WeatherCard color={color} weekWeather={weekWeather} />
        <InputForm />
      </div>
    );
  }
}

export default App;
