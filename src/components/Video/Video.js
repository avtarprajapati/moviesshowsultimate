import React from 'react';

import './VideoStyle.scss';

const Video = ({ id, videoId, show }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="backModel" onClick={() => show(false)}>
      <div onClick={(e) => e.stopPropagation()} className="model">
        <span onClick={() => show(false)} className="close">
          X
        </span>
        <iframe src={videoUrl} className="video" title={id} />
      </div>
    </div>
  );
};

export default Video;
