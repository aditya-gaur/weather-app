import React, { Component } from "react";
import _ from "lodash";
import randomColor from "randomcolor";

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
      weekWeather: []
    };
  }

  componentWillMount() {
    this.getWeather();
  }

  getWeather = async (searchedCity = this.state.city) => {
    let weather = [];
    await fetchWeather(searchedCity)
      .then(response => {
        weather = response.list.map(dayWeather => {
          return {
            dayWeather,
            country: response.city.country,
            city: response.city.name
          };
        });
      })
      .catch(error => console.log("error", error));

    const { color } = iconInfo(weather[0].dayWeather.weather[0].id);
    this.setState({
      weekWeather: weather,
      city: searchedCity,
      searchedCity,
      color
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
    const InputForm = () => (
      <form onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <legend>Enter your city</legend>
          <input
            className="form-input"
            type="text"
            ref={this.city}
            defaultValue={this.state.searchedCity}
          />
        </fieldset>
      </form>
    );

    return (
      <div
        className="weather-container"
        style={{ backgroundColor: this.state.color }}
      >
        {_.isEmpty(this.state.weekWeather) ? (
          "no data"
        ) : (
          <WeatherCard
            color={this.state.color}
            weekWeather={this.state.weekWeather}
          />
        )}
        <InputForm />
      </div>
    );
  }
}

export default App;
