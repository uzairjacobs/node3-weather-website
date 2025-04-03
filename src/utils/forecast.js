const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=adb737aebe409058bf852107e8e3759d&&units=m&query=" +
    latitude + ',' + longitude;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (body.error) {
      callback("Couldnt find coordinates", undefined);
    } else {
    const temperature = body.current.temperature;
    const precip = body.current.precip;
    const weather = body.current.weather_descriptions[0];
    const wind_speed = body.current.wind_speed;
      callback(undefined, 
        weather +
        ": It is currently " +
        temperature +
        " degrees out. There is a " +
        precip +
        "% of rain. Wind speed is currently " + wind_speed + " km/h." 
        
      );
    }
  });
};

module.exports = forecast;
