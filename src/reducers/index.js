import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import tvReducer from './tvReducer';

export default combineReducers({
  movie: movieReducer,
  tv: tvReducer
});
