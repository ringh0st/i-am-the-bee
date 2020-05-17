
import tmdb from '../apis/baseUrl'

let apiKey = "b0a20e995baa08cdd818c57bcd38ffd1";
let currentDate = new Date().toISOString().split('T')[0];

export const  tmdbLatestMovies = async (page) => {
  const response = await tmdb.get(`discover/movie?api_key=${apiKey}&vote_average.gte=5&with_original_language=en&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=${currentDate}&include_adult=false&with_runtime.gte=70&include_video=false&page=${page}`)
  return response.data;
}
export const  tmdbTopMovies = async (page) => {
  const response = await tmdb.get(`discover/movie?api_key=${apiKey}&vote_average.gte=8&with_original_language=en&language=en-US&sort_by=popularity.desc&include_adult=false&with_runtime.gte=70&include_video=false&page=${page}`)
  return response.data;
} 

export const tmdbGreatMovies = async (page) => {
  const response = await tmdb.get(`discover/movie?api_key=${apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&release_date.gte=1985&page=${page}`)
  return response.data;
}

export const fetchMovieById = async (id) =>{
  const response = await tmdb.get(`movie/${id}?api_key=${apiKey}&language=en-US&include_video=true`);
  return response.data;
}
export const fetchMovieTrailer = async (imdbId) =>{ 
  const response = await tmdb.get(`movie/${imdbId}/videos?api_key=${apiKey}&language=en-US`);
  return response.data;
}
export const fetchPeoplesId = async (id)=> {
  const response = await tmdb.get(`movie/${id}/credits?api_key=${apiKey}&language=en-US`);
  return response.data;
}
export const searchMovieName = async (searchTerm)=>{
  const response = await tmdb.get(`search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
  return response.data
}

export const movieReviews = async (id) => {
  const response = await tmdb.get(`movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
  return response.data
}