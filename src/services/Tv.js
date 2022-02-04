const API_KEY = "e223219a33cbe1d2134dd191301292bd";
const TvRoutes = {
  home: {
    popular: {
      path: `/tv/popular?api_key=${API_KEY}&language=en-US&page=`,
      title: "Popular TV shows",
    },
    trendingtoday: {
      path: `/trending/tv/day?api_key=${API_KEY}&language=en-US&page=`,
      title: "trending on TV today",
    },
  },
  idSearch: {
    idpath: `/tv/`,
    getdetails: {
      path: `?api_key=${API_KEY}&language=en-US`,
      title: "TV Details",
    },
    recommendation: {
      path: `/recommendations?api_key=${API_KEY}&language=en-US&page=`,
      title: "Recommended",
    },
    similar: {
      path: `/similar?api_key=${API_KEY}&language=en-US&page=`,
      title: "Similar Movies",
    },
    getvideo: {
      path: `/videos?api_key=${API_KEY}&language=en-US`,
      title: "Related Videos",
    },
  },
};
module.exports = TvRoutes;
