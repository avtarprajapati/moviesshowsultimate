import { FETCH_VIDEO_ID } from '../actions/typeConfig';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEO_ID:
      return { ...state, [action.payload.id]: action.payload.results[0]?.key };
    default:
      return { ...state };
  }
};
