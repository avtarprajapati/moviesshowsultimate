import React from 'react';
import Video from '../Video/Video';

const VideoPlayMovie = (props) => {
  const { id, videoId } = props.match.params;

  return <Video id={id} videoId={videoId} type="movie" />;
};

export default VideoPlayMovie;
