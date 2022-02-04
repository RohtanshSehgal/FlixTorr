const API_KEY = "e223219a33cbe1d2134dd191301292bd";
const general = {
  image: {
    poster: "https://image.tmdb.org/t/p/w1280",
    background: "https://image.tmdb.org/t/p/original",
  },
  search: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
};

export default general;
