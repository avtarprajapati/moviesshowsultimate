import _ from 'lodash';
import {
  FETCH_POPULAR_MOVIE,
  FETCH_TRENDING_MOVIE
} from '../actions/typeConfig';

const INITIAL_VALUE = {
  popular: {},
  trending: {},
  topRated: {},
  upcoming: {},
  movieDetail: {}
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIE:
      return { ...state, popular: _.mapKeys(action.payload, 'id') };
    case FETCH_TRENDING_MOVIE:
      return { ...state, trending: _.mapKeys(action.payload, 'id') };
    default:
      return { ...state };
  }
};
