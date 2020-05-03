import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedMovies } from '../../actions';

import Card from '../reusable/Card';

import './MovieStyle.scss';

class TopRated extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.topRatedMovie.length)
      this.props.fetchTopRatedMovies(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchTopRatedMovies(this.state.page);
    }
  }

  renderCard(movies) {
    return movies.map((movie) => <Card key={movie.id} show={movie} />);
  }

  onInputClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <section className="section">
        <h2 className="heading2">Top Rated Movies</h2>
        <div className="wrap">{this.renderCard(this.props.topRatedMovie)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    topRatedMovie: Object.values(state.movie.topRated)
  };
}

export default connect(mapStateToProps, { fetchTopRatedMovies })(TopRated);
