import _ from 'lodash';
import { FETCH_POPULAR_TV, FETCH_TRENDING_TV } from '../actions/typeConfig';

const INITIAL_VALUE = {
  popular: {},
  trending: {},
  topRated: {},
  upcoming: {},
  movieDetail: {}
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case FETCH_POPULAR_TV:
      return { ...state, popular: _.mapKeys(action.payload, 'id') };
    case FETCH_TRENDING_TV:
      return { ...state, trending: _.mapKeys(action.payload, 'id') };
    default:
      return { ...state };
  }
};
