import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMoviesDetails, youtubeId } from '../../actions';

import Video from '../Video/Video';
import backgroundImage from '../Assets/img/backgroundImage.jpg';
import defaultImage from '../Assets/img/defaultImage.jpg';
import sprite from '../Assets/sprite.svg';

import './movieDetailsStyle.scss';

class MovieDetails extends Component {
  state = {
    show: 'false'
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMoviesDetails(id);
    this.props.youtubeId('movie', id);
  }

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

    return `${hr} hr ${String(min).substr(0, 2)} min`;
  };

  priceFormat = (price) => {
    if (!price) return '--';
    return new Intl.NumberFormat('en-IN').format(price);
    // price = String;(Math.abs(price));
    // if (price.length > 3) {
    //   price =
    //     price.substr(0, price.length - 3) +
    //     ',' +
    //     price.substr(price.length - 3, 3);
    // }
    // return price;
  };

  showVideo() {
    if (this.state.show === 'true') {
      return (
        <Video
          id={this.props.movieDetail.id}
          videoId={this.props.videoId}
          show={(bool) => this.setState({ show: bool })}
        />
      );
    }
  }

  render() {
    if (!this.props.movieDetail) return 'Loading...';

    const detail = this.props.movieDetail;

    let imgUrl, backImgUrl;

    if (detail.poster_path === null) {
      imgUrl = defaultImage;
    } else {
      imgUrl = `https://image.tmdb.org/t/p/original${detail.poster_path}`;
    }
    if (detail.backdrop_path === null) {
      backImgUrl = backgroundImage;
    } else {
      backImgUrl = `https://image.tmdb.org/t/p/original${detail.backdrop_path}`;
    }

    const bgImg = {
      backgroundImage: `linear-gradient(#0f0e17cb, #0f0e17cb), url(${backImgUrl})`
    };

    return (
      <section className="details" style={bgImg}>
        <div className="poster">
          <img src={imgUrl} alt={detail.title} />
        </div>
        <div className="details__content">
          <div className="title">
            <h2>
              {detail.title}
              <span>
                ({this.dateFormat(detail.release_date).split('/')[2]})
              </span>
            </h2>
            <div className="facts">
              <span className="release">
                {this.dateFormat(detail.release_date)}
              </span>
              <span className="genres">{this.genres(detail.genres)}</span>
              <span className="runtime">{this.timeFormat(detail.runtime)}</span>
            </div>
          </div>
          <div className="action">
            <div className="rate">
              <span className="score">{detail.score * 10}</span>
              User Score
            </div>
            <span
              className="link playbtn"
              onClick={() => this.setState({ show: 'true' })}
            >
              <svg className="play">
                <use xlinkHref={`${sprite}#icon-play`}></use>
              </svg>
              Play Trailer
            </span>
          </div>
          <div className="cost">
            <div className="budget">
              <h4 className="heading-4">Budget</h4>
              <p>&#8377; {this.priceFormat(detail.budget)}</p>
            </div>
            <div className="revenue">
              <h4 className="heading-4">Revenue</h4>
              <p>&#8377; {this.priceFormat(detail.revenue)}</p>
            </div>
          </div>
          <div className="overview">
            <div className="description">
              <h2 className="heading-2">Overview</h2>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
        {this.showVideo()}
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  return {
    movieDetail: state.movie.movieDetail[id],
    videoId: state.videoId[id]
  };
}

export default connect(mapStateToProps, { fetchMoviesDetails, youtubeId })(
  MovieDetails
);
