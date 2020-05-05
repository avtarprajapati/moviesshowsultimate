import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieSearch, fetchTvSearch } from '../../actions';

import defaultImage from '../Assets/img/defaultImage.jpg';

import './SearchStyle.scss';

class Search extends Component {
  state = {
    active: 'movie'
  };

  componentDidMount() {
    if (!this.props.term) return;
    this.props.fetchMovieSearch(this.props.term);
    this.props.fetchTvSearch(this.props.term);
  }

  componentDidUpdate(prevProps, prevState) {
    // use setimeout function because it send extra network request
    // TODO: first search work after we search another search it didn't send
    setTimeout(() => {
      if (prevState.term !== this.props.term) {
        console.log('term change');
        if (!this.props.searchMovie.length)
          this.props.fetchMovieSearch(this.props.term);
        if (!this.props.searchTv.length)
          this.props.fetchTvSearch(this.props.term);
      }
    }, 2);
  }

  dateFormat = (date) => {
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

  overviewFormat = (overview, limit = 130) => {
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

  imageUrl(card) {
    if (card.poster_path === null) {
      return defaultImage;
    } else {
      return `https://image.tmdb.org/t/p/original${card.poster_path}`;
    }
  }

  cardDisplay(cards) {
    return cards.map((card) => (
      <div className="card" key={card.id}>
        <div className="card__img">
          <Link to={`/${card.type}/${card.id}`} className="link">
            <img src={this.imageUrl(card)} alt={card.title} />
          </Link>
        </div>
        <div className="card__details">
          <div className="card__title">
            <h2 className="heading-2">
              <Link to={`/${card.type}/${card.id}`} className="heading-2">
                {card.title}
              </Link>
            </h2>
            <span className="released-date">
              {this.dateFormat(card.release_date)}
            </span>
          </div>
          <div className="card__desc">
            <p>{this.overviewFormat(card.overview)}</p>
          </div>
        </div>
      </div>
    ));
  }

  // renderCards() {
  //   if (this.state.active === 'movie')
  //     return this.cardDisplay(this.props.searchMovie);
  //   if (this.state.active === 'tv')
  //     return this.cardDisplay(this.props.searchTv);
  // }

  render() {
    const { term, searchMovie, searchTv } = this.props;
    if (!searchMovie.length && !searchTv.length) return 'Loading';

    // console.log(term);

    return (
      <section className="section__search">
        <div className="results__panel">
          <h3 className="heading-3">Search Results</h3>
          <ul className="type">
            <li
              className={this.state.active === 'movie' ? 'selected' : ''}
              onClick={() => this.setState({ active: 'movie' })}
            >
              <span className="link">Movies</span>
              <span className="total">{searchMovie.length}</span>
            </li>
            <li
              className={this.state.active === 'tv' ? 'selected' : ''}
              onClick={() => this.setState({ active: 'tv' })}
            >
              <span className="link">TV Shows</span>
              <span className="total"> {searchTv.length}</span>
            </li>
          </ul>
        </div>

        <div className="search__results">
          {this.state.active === 'movie'
            ? this.cardDisplay(this.props.searchMovie)
            : this.cardDisplay(this.props.searchTv)}
        </div>
      </section>
    );
  }
}

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
