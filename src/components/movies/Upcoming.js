import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../../actions';

import Card from '../reusable/Card';

import './MovieStyle.scss';

class Upcoming extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.upcomingMovie.length)
      this.props.fetchUpcomingMovies(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchUpcomingMovies(this.state.page);
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
        <h2 className="heading2">Upcoming Movies</h2>
        <div className="wrap">{this.renderCard(this.props.upcomingMovie)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    upcomingMovie: Object.values(state.movie.upcoming)
  };
}

export default connect(mapStateToProps, { fetchUpcomingMovies })(Upcoming);
