const key = process.env.REACT_APP_IMDB_API_KEY

 const requests = {


    requestPopular: `https://api.themoviedb.org/3/discover/tv?&with_networks=213&language=pt-BR&api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR`,
   requestHorror: `https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR&api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=${key}`,
    requestRomance: `https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=pt-BR&api_key=${key}`,
    requestAction:`https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=${key}`

 }




 export default requests






