import _ from 'lodash';
import {
  FETCH_SEARCH_VALUE,
  FETCH_TV_DETAILS,
  FETCH_POPULAR_TV,
  FETCH_TRENDING_TV,
  FETCH_TOP_RATED_TV,
  FETCH_AIRING_TODAY__TV,
  FETCH_ON_THE_AIR__TV
} from '../actions/typeConfig';

const INITIAL_VALUE = {
  searchResult: {},
  tvDetail: {},
  popular: {},
  trending: {},
  topRated: {},
  airingToday: {},
  onTheAir: {}
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_VALUE:
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          ..._.mapKeys(action.payload, 'id')
        }
      };
    case FETCH_TV_DETAILS:
      return {
        ...state,
        tvDetail: {
          ...state.tvDetail,
          ..._.mapKeys(action.payload, 'id')
        }
      };
    case FETCH_POPULAR_TV:
      return {
        ...state,
        popular: { ...state.popular, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_TRENDING_TV:
      return {
        ...state,
        trending: { ...state.trending, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_TOP_RATED_TV:
      return {
        ...state,
        topRated: { ...state.topRated, ..._.mapKeys(action.payload, 'id') }
      };
    case FETCH_AIRING_TODAY__TV:
      return {
        ...state,
        airingToday: {
          ...state.airingToday,
          ..._.mapKeys(action.payload, 'id')
        }
      };
    case FETCH_ON_THE_AIR__TV:
      return {
        ...state,
        onTheAir: { ...state.onTheAir, ..._.mapKeys(action.payload, 'id') }
      };
    default:
      return { ...state };
  }
};
