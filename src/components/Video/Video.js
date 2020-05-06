import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import history from '../history';

import './VideoStyle.scss';

const Video = ({ id, videoId, type }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return ReactDOM.createPortal(
    <div className="backModel" onClick={() => history.push(`/${type}/${id}`)}>
      <div onClick={(e) => e.stopPropagation()} className="model">
        <Link to={`/${type}/${id}`} className="close">
          X
        </Link>
        <iframe src={videoUrl} className="video" />
      </div>
    </div>,
    document.getElementById('video')
  );
};

export default Video;
