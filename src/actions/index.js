import themoviedb from '../apis/themoviedb';
import {
  FETCH_POPULAR_MOVIE,
  FETCH_POPULAR_TV,
  FETCH_TRENDING_MOVIE,
  FETCH_TRENDING_TV
} from './typeConfig';

const url = (path, page) => {
  return themoviedb.get(path, {
    params: {
      api_key: '6625deddd4ccf0e5c36110f7e6b9274e',
      language: 'en-US',
      page: page
    }
  });
};

export const fetchPopularMovies = (page = 1) => async (dispatch, getState) => {
  const response = await url(`/movie/popular`, page);

  const popularMovie = response.data.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      overview: movie.overview,
      release_date: movie.release_date,
      score: movie.vote_average,
      type: 'movie'
    };
  });

  dispatch({
    type: FETCH_POPULAR_MOVIE,
    payload: popularMovie
  });
};

export const fetchPopularTV = (page = 1) => async (dispatch, getState) => {
  const response = await url(`/tv/popular`, page);

  const popularTV = response.data.results.map((tv) => {
    return {
      id: tv.id,
      title: tv.name,
      backdrop_path: tv.backdrop_path,
      poster_path: tv.poster_path,
      overview: tv.overview,
      release_date: tv.first_air_date,
      score: tv.vote_average,
      type: 'tv'
    };
  });

  dispatch({
    type: FETCH_POPULAR_TV,
    payload: popularTV
  });
};

export const fetchTrendingMovie = (page = 1) => async (dispatch, getState) => {
  const response = await url(`/trending/movie/day`, page);

  const trendingMovie = response.data.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      overview: movie.overview,
      release_date: movie.release_date,
      score: movie.vote_average,
      type: 'movie'
    };
  });

  dispatch({
    type: FETCH_TRENDING_MOVIE,
    payload: trendingMovie
  });
};

export const fetchTrendingTV = (page = 1) => async (dispatch, getState) => {
  const response = await url(`/trending/tv/day`, page);

  const trendingTV = response.data.results.map((tv) => {
    return {
      id: tv.id,
      title: tv.name,
      backdrop_path: tv.backdrop_path,
      poster_path: tv.poster_path,
      overview: tv.overview,
      release_date: tv.first_air_date,
      score: tv.vote_average,
      type: 'tv'
    };
  });

  dispatch({
    type: FETCH_TRENDING_TV,
    payload: trendingTV
  });
};
