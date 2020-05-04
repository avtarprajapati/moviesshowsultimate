import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAiringTodayTV } from '../../actions';

import Card from '../reusable/Card';

import './TvStyle.scss';

class AiringToday extends Component {
  state = { page: 1 };

  componentDidMount() {
    if (!this.props.airingTodayTv.length)
      this.props.fetchAiringTodayTV(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.fetchAiringTodayTV(this.state.page);
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
        <h2 className="heading2">Airing Today Tv Shows</h2>
        <div className="wrap">{this.renderCard(this.props.airingTodayTv)}</div>
        <button className="btn__load" onClick={this.onInputClick}>
          Load More
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    airingTodayTv: Object.values(state.tv.airingToday)
  };
}

export default connect(mapStateToProps, { fetchAiringTodayTV })(AiringToday);
