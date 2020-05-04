import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedTV } from '../../actions';

import Card from '../reusable/Card';

import './TvStyle.scss';

class TopRated extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.topRatedTv.length)
      this.props.fetchTopRatedTV(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchTopRatedTV(this.state.page);
    }
  }

  renderCard(TvShow) {
    return TvShow.map((tv) => <Card key={tv.id} show={tv} />);
  }

  onInputClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <section className="section">
        <h2 className="heading2">TopRated Tv Shows</h2>
        <div className="wrap">{this.renderCard(this.props.topRatedTv)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    topRatedTv: Object.values(state.tv.topRated)
  };
}

export default connect(mapStateToProps, { fetchTopRatedTV })(TopRated);
