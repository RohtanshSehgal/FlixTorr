const axios = require("axios");

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
module.exports = {
  tmdb: tmdb,
};
