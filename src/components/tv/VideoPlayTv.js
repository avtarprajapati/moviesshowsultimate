import React from 'react';
import Video from '../Video/Video';

const VideoPlayTv = (props) => {
  const { id, videoId } = props.match.params;

  return <Video id={id} videoId={videoId} type="tv" />;
};

export default VideoPlayTv;
