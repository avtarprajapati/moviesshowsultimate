import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../../actions';

import Card from '../reusable/Card';

import './MovieStyle.scss';

class NowPlay extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.nowPlayMovie.length)
      this.props.fetchNowPlayingMovies(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchNowPlayingMovies(this.state.page);
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
        <h2 className="heading2">Now Playing Movies</h2>
        <div className="wrap">{this.renderCard(this.props.nowPlayMovie)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    nowPlayMovie: Object.values(state.movie.nowPlaying)
  };
}

export default connect(mapStateToProps, { fetchNowPlayingMovies })(NowPlay);
