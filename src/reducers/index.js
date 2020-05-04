import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import tvReducer from './tvReducer';
import videoIdReducer from './videoIdReducer';

export default combineReducers({
  movie: movieReducer,
  tv: tvReducer,
  videoId: videoIdReducer
});
