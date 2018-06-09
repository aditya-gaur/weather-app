import React, { Component } from "react";
import WeatherItem from "./WeatherItem";

export default class WeatherCard extends Component {
  render() {
    const { weekWeather } = this.props;

    return (
      <div className="week-container">
        <div className="week-current-day">
          <WeatherItem data={weekWeather[0]} />
        </div>
        <div className="week-all-days">
          {weekWeather.map((weather, i) => {
            return (
              <div key={i} className="week-one-day">
                <WeatherItem theme={"small"} data={weather} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
