import axios from "axios";
const API_KEY = "d94bcd435b62a031771c35633f9f310a";
const baseUrl = "http://api.openweathermap.org/data/2.5/";

const fetchWeather = city => {
  const apiUrl = `${baseUrl}/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`;

  return axios
    .get(apiUrl)
    .then(response => response.data)
    .catch(error => error);
};

export default fetchWeather;
