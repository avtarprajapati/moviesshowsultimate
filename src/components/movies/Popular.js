import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../actions';

import Card from '../reusable/Card';

import './MovieStyle.scss';

class Popular extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.popularMovie.length)
      this.props.fetchPopularMovies(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchPopularMovies(this.state.page);
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
        <h2 className="heading2">Popular Movies</h2>
        <div className="wrap">{this.renderCard(this.props.popularMovie)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
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
