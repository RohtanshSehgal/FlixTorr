const API_KEY = "";

const requests = {
  movies: {
    Link: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    title: "trending movies",
  },
  trending: {
    Link: `/trending/tv/day?api_key=${API_KEY}&language=en-US`,
    title: "trending tv-shows",
  },
  netflix: {
    Link: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    title: "netflix originals",
  },
  top: {
    Link: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: "top rated",
  },
  action: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: "action",
  },
  comedy: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: "comedy",
  },
  horror: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: "horror",
  },
  romance: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: "romance",
  },
  docs: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: "documentries",
  },
  crime: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    title: "crime",
  },
  sci: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    title: "sci-fi",
  },
  animated: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    title: "animated",
  },
  adventure: {
    Link: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    title: "adventure",
  },
};

export default requests;
