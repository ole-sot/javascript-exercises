const convertToCelsius = function(xDegF) {
  const xDegC = Math.round(((xDegF - 32) * 5/9) * 10) / 10;
  return xDegC;
};

const convertToFahrenheit = function(xDegC) {
  const xDegF = Math.round((xDegC * 9/5 + 32) * 10) / 10;
  return xDegF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
