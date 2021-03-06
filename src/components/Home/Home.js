import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchTerm,
  fetchPopularMovies,
  fetchPopularTV,
  fetchTrendingMovie,
  fetchTrendingTV
} from '../../actions';

import './Home.scss';
import sprite from '../Assets/sprite.svg';
import Card from '../reusable/Card';

class Home extends Component {
  state = {
    term: '',
    active: {
      popular: 'movie',
      trending: 'tv'
    }
  };

  componentDidMount() {
    // Here we fetch popular and trending movies and tv shows

    // Also check condition if their is already request made and our
    // state has value then didn't request again.

    if (!this.props.popularMovie.length) {
      // console.log('requst made once');

      this.props.fetchPopularMovies();
      this.props.fetchPopularTV();
      this.props.fetchTrendingMovie();
      this.props.fetchTrendingTV();
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    // Here send query to search page
    // <Search query={this.state.term}/>
    this.props.searchTerm(this.state.term);
    // this.props.fetchSearch('movie', this.state.term);
    // this.props.fetchSearch('tv', this.state.term);
  };

  renderCards = (shows) => {
    if (shows.length) {
      return shows.map((show) => <Card key={show.id} show={show} />);
    }
  };

  displayPopularCard() {
    if (this.state.active.popular === 'movie')
      return this.renderCards(this.props.popularMovie);
    if (this.state.active.popular === 'tv')
      return this.renderCards(this.props.popularTV);
  }

  displayTrendingCard() {
    if (this.state.active.trending === 'movie')
      return this.renderCards(this.props.trendingMovie);
    if (this.state.active.trending === 'tv')
      return this.renderCards(this.props.trendingTV);
  }

  render() {
    return (
      <>
        <section className="hero">
          <div className="hero__content">
            <h2 className="heading2">Welcome MoviesShows,</h2>
            <p>Million of movies, tv shows to discover. Explore Now.</p>
          </div>
          <form onSubmit={this.onSubmit} className="form">
            <input
              type="text"
              className="form__input"
              placeholder="search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button className="form__button">
              <svg className="form__icon">
                <use xlinkHref={`${sprite}#icon-search`}></use>
              </svg>
              Search
            </button>
          </form>
        </section>

        {/* <!-- Popular section --> */}
        <main className="main__section">
          <div className="popular">
            <div className="popular__heading">
              <h2 className="heading2">What's Popular</h2>
              <div className="selector_wrap">
                <div className="selector">
                  <div
                    ref=""
                    className={`anchor ${
                      this.state.active.popular === 'movie' ? 'active' : ''
                    }`}
                    onClick={() =>
                      this.setState({
                        active: { ...this.state.active, popular: 'movie' }
                      })
                    }
                  >
                    <span className="link" data-type="movies">
                      Movies
                    </span>
                  </div>
                  <div
                    className={`anchor ${
                      this.state.active.popular === 'tv' ? 'active' : ''
                    }`}
                    onClick={() =>
                      this.setState({
                        active: { ...this.state.active, popular: 'tv' }
                      })
                    }
                  >
                    <span className="link" data-type="tv">
                      TV
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__wrapper">{this.displayPopularCard()}</div>
          </div>
        </main>

        {/* Trending Movies */}
        <main className="main__section">
          <div className="popular">
            <div className="popular__heading">
              <h2 className="heading2">What's Trending</h2>
              <div className="selector_wrap">
                <div className="selector">
                  <div
                    ref=""
                    className={`anchor ${
                      this.state.active.trending === 'movie' ? 'active' : ''
                    }`}
                    onClick={() =>
                      this.setState({
                        active: { ...this.state.active, trending: 'movie' }
                      })
                    }
                  >
                    <span className="link" data-type="movies">
                      Movies
                    </span>
                  </div>
                  <div
                    className={`anchor ${
                      this.state.active.trending === 'tv' ? 'active' : ''
                    }`}
                    onClick={() =>
                      this.setState({
                        active: { ...this.state.active, trending: 'tv' }
                      })
                    }
                  >
                    <span className="link" data-type="tv">
                      TV
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__wrapper">{this.displayTrendingCard()}</div>
          </div>
        </main>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularMovie: Object.values(state.movie.popular),
    popularTV: Object.values(state.tv.popular),
    trendingMovie: Object.values(state.movie.trending),
    trendingTV: Object.values(state.tv.trending)
  };
}

export default connect(mapStateToProps, {
  searchTerm,
  fetchPopularMovies,
  fetchPopularTV,
  fetchTrendingMovie,
  fetchTrendingTV
})(Home);
