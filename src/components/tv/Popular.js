import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularTV } from '../../actions';

import Card from '../reusable/Card';

import './TvStyle.scss';

class Popular extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.popularTv.length)
      this.props.fetchPopularTV(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchPopularTV(this.state.page);
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
        <h2 className="heading2">Popular Tv Shows</h2>
        <div className="wrap">{this.renderCard(this.props.popularTv)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularTv: Object.values(state.tv.popular)
  };
}

export default connect(mapStateToProps, { fetchPopularTV })(Popular);
