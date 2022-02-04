const API_KEY = "e223219a33cbe1d2134dd191301292bd";
const MoviesRoutes = {
  home: {
    popular: {
      path: `/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
      title: "Popular Movies",
    },
    trendingtoday: {
      path: `/trending/movie/day?api_key=${API_KEY}&language=en-US&page=`,
      title: "trending movies today",
    },
    banner: {
      path: `/trending/all/week?api_key=${API_KEY}`,
      title: "Banner",
    },
  },
  oldbbutgold: {
    path: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    title: "Old But Gold!",
  },
  idSearch: {
    idpath: `/movie/`,
    getdetails: {
      path: `?api_key=${API_KEY}&language=en-US`,
      title: "Movie Details",
    },
    recommendation: {
      path: `/recommendations?api_key=${API_KEY}&language=en-US&page=`,
      title: "Recommended",
    },
    similar: {
      path: `/similar?api_key=${API_KEY}&language=en-US&page=1`,
      title: "Similar Movies",
    },
    getvideo: {
      path: `/videos?api_key=${API_KEY}&language=en-US`,
      title: "Related Videos",
    },
  },
  genre: {
    action: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=28&include_adult=false&page=`,
      title: "action",
    },
    comedy: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=35&include_adult=false&page=`,
      title: "comedy",
    },
    horror: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=27&include_adult=false&page=`,
      title: "horror",
    },
    romance: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=10749&include_adult=false&page=`,
      title: "romance",
    },
    crime: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=80&include_adult=false&page=`,
      title: "crime",
    },
    sci: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=878&include_adult=false&page=`,
      title: "sci-fi",
    },
    animated: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=16&include_adult=false&page=`,
      title: "animated",
    },
    adventure: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=12&include_adult=false&page=`,
      title: "adventure",
    },
    war: {
      Link: `/discover/movie?api_key=${API_KEY}&with_genres=10752&include_adult=false&page=`,
      title: "war",
    },
  },
};
export default MoviesRoutes;
