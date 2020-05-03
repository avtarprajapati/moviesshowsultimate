import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../actions';

import Card from '../reusable/Card';

import './PopularStyle.scss';

class Popular extends Component {
  componentDidMount() {
    if (!this.props.popularMovie.length) this.props.fetchPopularMovies();
  }

  renderCard(movies) {
    return movies.map((movie) => <Card key={movie.id} show={movie} />);
  }

  render() {
    console.log(this.props.popularMovie);
    return (
      <section className="section">
        <h2 className="heading2">Popular Movies</h2>
        <div className="wrap">{this.renderCard(this.props.popularMovie)}</div>
        <button className="btn__load">Load More</button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularMovie: Object.values(state.movie.popular)
  };
}

export default connect(mapStateToProps, { fetchPopularMovies })(Popular);
