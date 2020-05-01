import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HorizontalCard.scss';

const dateFormat = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const splitDate = date.split('-');

  const month = months[Number(splitDate[1]) - 1];

  return `${month} ${splitDate[2]}, ${splitDate[0]}`;
};

const titleFormat = (title, limit = 25) => {
  const newTitle = [];
  if (title.length >= limit) {
    // star wars: the rise of skywalker
    /**
     * ['star','wars:','the','rise','of','skywalker']
     *
     */

    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    // return the result
    return `${newTitle.join(' ')} ...`;
  }

  return title;
};

const imgUrl = 'https://image.tmdb.org/t/p/original/';

const HorizontalCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card__img">
        <Link to={`/movie/${movie.id}`}>
          <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
        </Link>
      </div>
      <div className="card__content">
        <span className="score">{movie.score}</span>
        <h2 className="heading2" className="card__title">
          <Link to={`/movie/${movie.id}`} className="heading2 link">
            {titleFormat(movie.title)}
          </Link>
        </h2>
        <p>
          {dateFormat(movie.release_date)}
          {/* {movie.release_date} */}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;
