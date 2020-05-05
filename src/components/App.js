import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import Home from './Home/Home';
import Navbar from './NavigationBar/Navbar';
import Footer from './Footer/Footer';

import Search from './Search/Search';

import {
  MovieDetails,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
  NowPlayMovies
} from './movies';

import { PopularTV, TopRatedTV, OnAir, AiringToday, TvDetails } from './tv';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" exact component={Search} />
              <Route path="/movie/popular" exact component={PopularMovies} />
              <Route path="/movie/toprated" exact component={TopRatedMovies} />
              <Route path="/movie/upcoming" exact component={UpcomingMovies} />
              <Route path="/movie/nowplaying" exact component={NowPlayMovies} />
              <Route path="/movie/:id" exact component={MovieDetails} />
              <Route path="/tv/popular" exact component={PopularTV} />
              <Route path="/tv/onair" exact component={OnAir} />
              <Route path="/tv/airingtoday" exact component={AiringToday} />
              <Route path="/tv/toprated" exact component={TopRatedTV} />
              <Route path="/tv/:id" exact component={TvDetails} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
