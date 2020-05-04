import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnAirTV } from '../../actions';

import Card from '../reusable/Card';

import './TvStyle.scss';

class OnAir extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.onAirTv.length) this.props.fetchOnAirTV(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchOnAirTV(this.state.page);
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
        <h2 className="heading2">On The Air Tv Shows</h2>
        <div className="wrap">{this.renderCard(this.props.onAirTv)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    onAirTv: Object.values(state.tv.onTheAir)
  };
}

export default connect(mapStateToProps, { fetchOnAirTV })(OnAir);
