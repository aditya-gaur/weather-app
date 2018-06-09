import React, { Component } from "react";
import WeatherItem from "./WeatherItem";
import shadeColor from "../utils/shade-color";

import _ from "lodash";

export default class WeatherCard extends Component {
  render() {
    const { color, weekWeather } = this.props;

    return (
      <div className="week-container">
        <div className="week-current-day">
          <WeatherItem data={weekWeather[0]} />
        </div>
        <div className="week-all-days">
          {_.map(weekWeather, (weather, i) => {
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
