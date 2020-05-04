import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTvDetails } from '../../actions';

import sprite from '../Assets/sprite.svg';

import './tvDetailsStyle.scss';

class TvDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchTvDetails(id);
  }

  year = (release_date) => {
    if (!release_date) return;
    return `(${release_date.split('-')[0]})`;
  };

  dateFormat = (release_date) => {
    if (!release_date) return;
    const [year, month, date] = release_date.split('-');
    return `${date}/${month}/${year}`;
  };

  genres = (genres) => {
    if (!genres) return;
    const genresShow = genres.map((genre) => genre.name);
    return `${genresShow.join(', ')}`;
  };

  // 117
  // 117 / 60 -> 1.95 = 1 hr
  // 0.95 * 60 -> 57 = 57 min

  timeFormat = (runtime) => {
    if (!runtime) return;
    let time, hr, min;
    if (runtime >= 60) {
      time = String(runtime / 60);
      hr = time.split('.')[0];
      min = time.split('.')[1];
    }
    if (min >= 60) {
      min = String(min * 60);
      min = min.length >= 2 ? min / 100 : min;
    }

    if (runtime <= 60) return `${runtime} min`;

    return `${hr} hr ${String(min).substr(0, 2)} min`;
  };

  render() {
    if (!this.props.tvDetail) return 'Loading...';

    const detail = this.props.tvDetail;

    const imgUrl = 'https://image.tmdb.org/t/p/original';

    const bgImg = {
      backgroundImage: `linear-gradient(#0f0e17cb, #0f0e17cb), url(${imgUrl}${detail.backdrop_path})`
    };

    console.log(detail.runtime[0]);

    return (
      <section className="details" style={bgImg}>
        <div className="poster">
          <img src={`${imgUrl}/${detail.poster_path}`} alt={detail.title} />
        </div>
        <div className="details__content">
          <div className="title">
            <h2>
              {detail.title}
              <span>{this.year(detail.release_date)}</span>
            </h2>
            <div className="facts">
              <span className="release">
                {this.dateFormat(detail.release_date)}
              </span>
              <span className="genres">{this.genres(detail.genres)}</span>
              <span className="runtime">
                {this.timeFormat(detail.runtime[0])}
              </span>
            </div>
          </div>
          <div className="action">
            <div className="rate">
              <span className="score">{detail.score * 10}</span>
              User Score
            </div>
            <Link to="/" className="link playbtn">
              <svg className="play">
                <use xlinkHref={`${sprite}#icon-play`}></use>
              </svg>
              Play Trailer
            </Link>
          </div>
          <div className="overview">
            <div className="description">
              <h2 className="heading-2">Overview</h2>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  return {
    tvDetail: state.tv.tvDetail[id]
  };
}

export default connect(mapStateToProps, { fetchTvDetails })(TvDetails);
