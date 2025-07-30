const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["img"] = path.resolve(__dirname, "img");
    return config;
  },
};
