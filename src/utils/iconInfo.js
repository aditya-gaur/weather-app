const iconInfo = function(id) {
  if (id >= 200 && id < 300) {
    return { icon: "RAIN", color: "#4a6583" };
  } else if (id >= 300 && id < 500) {
    return { icon: "SLEET", color: "#9D9FA7" };
  } else if (id >= 500 && id < 600) {
    return { icon: "RAIN", color: "#4a6583" };
  } else if (id >= 600 && id < 700) {
    return { icon: "SNOW", color: "#9dbbb8" };
  } else if (id >= 700 && id < 800) {
    return { icon: "FOG", color: "#b8a8c5" };
  } else if (id === 800) {
    return { icon: "CLEAR_DAY", color: "#ECDB54" };
  } else if (id >= 801 && id < 803) {
    return { icon: "PARTLY_CLOUDY_DAY", color: "#9e9a9a" };
  } else if (id >= 802 && id < 900) {
    return { icon: "CLOUDY", color: "#827e7e" };
  } else if (id === 905 || (id >= 951 && id <= 956)) {
    return { icon: "WIND", color: "#023461c9" };
  } else if (id >= 900 && id < 1000) {
    return { icon: "RAIN", color: "#4a6583" };
  }
};

export default iconInfo;
