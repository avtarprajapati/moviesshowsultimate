import React from 'react';
import { Link } from 'react-router-dom';

import './Card.scss';
import defaultImage from '../Assets/img/defaultImage.jpg';

const dateFormat = (date) => {
  if (date == null) return date;

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
    'Dec',
  ];

  const splitDate = date.split('-');

  const month = months[Number(splitDate[1]) - 1];

  return `${month} ${splitDate[2]}, ${splitDate[0]}`;
};

const titleFormat = (title, limit = 25) => {
  if (title == null) return title;
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

const Card = ({ show }) => {
  let imgUrl;
  if (!show.poster_path) {
    imgUrl = defaultImage;
  } else {
    imgUrl = `https://image.tmdb.org/t/p/original${show.poster_path}`;
  }

  return (
    <div className='card'>
      <div className='card__img'>
        <Link to={`/${show.type}/${show.id}`}>
          <img src={imgUrl} alt={show.title} />
        </Link>
      </div>
      <div className='card__content'>
        <span className='score'>{show.score}</span>
        <h2 className='heading2 card__title'>
          <Link to={`/${show.type}/${show.id}`} className='heading2 link'>
            {titleFormat(show.title)}
          </Link>
        </h2>
        <p>{dateFormat(show.release_date)}</p>
      </div>
    </div>
  );
};

export default Card;
