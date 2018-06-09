import React, { Component } from "react";
import Skycons from "react-skycons";
import Moment from "moment";
import iconInfo from "../utils/iconInfo";

export default class WeatherItem extends Component {
  renderDayName = timestamp => {
    const days = {
      sameDay: "[Today]",
      nextDay: "ddd",
      nextWeek: "ddd",
      lastDay: "ddd",
      lastWeek: "ddd"
    };

    return (
      <p className="timestamp">
        {Moment(timestamp * 1000).calendar(null, days)}
      </p>
    );
  };

  render() {
    const { data } = this.props;
    const { country, city, dayWeather } = data;
    const { dt: timestamp, temp, weather } = dayWeather;
    const { max: temperature } = temp;
    const {
      description: weatherType,
      id: icon
    } = weather[0];

    return (
      <div className={"weather-item " + this.props.theme}>
        <p className="location">
          <span className="city">{city}</span>
          <span className="country">{country ? `, ${country}` : null}</span>
        </p>
        <Skycons
          color="white"
          icon={iconInfo(icon).icon}
          style={{ height: "auto" }}
        />
        {this.renderDayName(timestamp)}
        <div className="temperature-info">
          <p className="temperature">
            {temperature}
            °C
          </p>
          <p className="info">{weatherType}</p>
        </div>
      </div>
    );
  }
}
