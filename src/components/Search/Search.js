import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieSearch, fetchTvSearch } from '../../actions';

import defaultImage from '../Assets/img/defaultImage.jpg';

import './SearchStyle.scss';

const dateFormat = (date) => {
  if (date == null) return date;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const splitDate = date.split('-');

  const month = months[Number(splitDate[1]) - 1];

  return `${month} ${splitDate[2]}, ${splitDate[0]}`;
};

const overviewFormat = (overview, limit = 130) => {
  if (overview == null) return overview;
  const newoverview = [];
  if (overview.length >= limit) {
    overview.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newoverview.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newoverview.join(' ')} ...`;
  }
  return overview;
};

const imageUrl = (card) => {
  if (card.poster_path === null) {
    return defaultImage;
  } else {
    return `https://image.tmdb.org/t/p/original${card.poster_path}`;
  }
};

const cardDisplay = (cards) => {
  return cards.map((card) => (
    <div className="card" key={card.id}>
      <div className="card__img">
        <Link to={`/${card.type}/${card.id}`} className="link">
          <img src={imageUrl(card)} alt={card.title} />
        </Link>
      </div>
      <div className="card__details">
        <div className="card__title">
          <h2 className="heading-2">
            <Link to={`/${card.type}/${card.id}`} className="heading-2">
              {card.title}
            </Link>
          </h2>
          <span className="released-date">{dateFormat(card.release_date)}</span>
        </div>
        <div className="card__desc">
          <p>{overviewFormat(card.overview)}</p>
        </div>
      </div>
    </div>
  ));
};

const Search = (props) => {
  const [active, setActive] = useState('movie');

  const {
    term,
    searchMovie,
    searchTv,
    fetchMovieSearch,
    fetchTvSearch
  } = props;

  // useEffect is always call on top level & don't call in condition,nested function, or loop
  useEffect(() => {
    if (!term) return;
    console.log(term);
    fetchMovieSearch(term);
    fetchTvSearch(term);
  }, [term]);

  const renderCards = () => {
    if (active === 'movie') return cardDisplay(searchMovie);
    if (active === 'tv') return cardDisplay(searchTv);
  };

  if (!searchMovie.length && !searchTv.length) return 'Loading';

  return (
    <section className="section__search">
      <div className="results__panel">
        <h3 className="heading-3">Search Results</h3>
        <ul className="type">
          <li
            className={active === 'movie' ? 'selected' : ''}
            onClick={() => setActive('movie')}
          >
            <span className="link">Movies</span>
            <span className="total">{searchMovie.length}</span>
          </li>
          <li
            className={active === 'tv' ? 'selected' : ''}
            onClick={() => setActive('tv')}
          >
            <span className="link">TV Shows</span>
            <span className="total"> {searchTv.length}</span>
          </li>
        </ul>
      </div>

      <div className="search__results">{renderCards()}</div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    // term: 'cars',
    term: state.movie.searchTerm,
    searchMovie: Object.values(state.movie.searchResult),
    searchTv: Object.values(state.tv.searchResult)
  };
}

export default connect(mapStateToProps, { fetchMovieSearch, fetchTvSearch })(
  Search
);
