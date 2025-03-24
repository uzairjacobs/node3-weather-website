const request = require("request");

const position = (address, callback) => {
  const url =
    "https://api.positionstack.com/v1/forward?access_key=351c86b7ab7b9bfc188a4eea6f209c40&query=" +
    encodeURIComponent(address) +
    "&limit=1";
  request({ url, json: true }, (error, { body } = {} ) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (!body.data || body.data.length === 0) {
      callback("Bruh is you Zoro??", undefined);
    } else {
      const result = body.data[0];
      callback(undefined, {
        name: result.name,
        latitude: result.latitude,
        longitude: result.longitude,
      });
    }
  });
};

module.exports = position;
