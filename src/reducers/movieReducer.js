import _ from 'lodash';
import {
  SEARCH_TERM,
  FETCH_MOVIE_SEARCH,
  FETCH_MOVIE_DETAILS,
  FETCH_POPULAR_MOVIE,
  FETCH_TRENDING_MOVIE,
  FETCH_TOP_RATED_MOVIE,
  FETCH_UPCOMING_MOVIE,
  FETCH_NOW_PLAYING_MOVIE
} from '../actions/typeConfig';

const INITIAL_VALUE = {
  searchTerm: '',
  searchResult: {},
  movieDetail: {},
  popular: {},
  trending: {},
  topRated: {},
  upcoming: {},
  nowPlaying: {}
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case FETCH_MOVIE_SEARCH:
      return {
        ...state,
        searchResult: {
          ..._.mapKeys(action.payload, 'id')
        }
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          [action.payload.id]: action.payload
        }
      };
    case FETCH_POPULAR_MOVIE:
      return {
        ...state,
        popular: { ...state.popular, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_TRENDING_MOVIE:
      return {
        ...state,
        trending: { ...state.trending, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_TOP_RATED_MOVIE:
      return {
        ...state,
        topRated: { ...state.topRated, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_UPCOMING_MOVIE:
      return {
        ...state,
        upcoming: { ...state.upcoming, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_NOW_PLAYING_MOVIE:
      return {
        ...state,
        nowPlaying: { ...state.nowPlaying, ..._.mapKeys(action.payload, 'id') }
      };
    default:
      return { ...state };
  }
};
