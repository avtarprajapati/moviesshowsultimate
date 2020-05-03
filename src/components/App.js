import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Navbar from './NavigationBar/Navbar';
import Footer from './Footer/Footer';

import {
  MovieDetails,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
  NowPlayMovies
} from './movies';

import { PopularTV, TopRatedTV } from './tv';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies/popular" exact component={PopularMovies} />
              <Route path="/movies/toprated" exact component={TopRatedMovies} />
              <Route path="/movies/upcoming" exact component={UpcomingMovies} />
              <Route
                path="/movies/nowplaying"
                exact
                component={NowPlayMovies}
              />
              <Route path="/tv/popular" exact component={PopularTV} />
              <Route path="/tv/toprated" exact component={TopRatedTV} />
              <Route path="/movie/:id" exact component={MovieDetails} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
