import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchTerm } from '../../actions';
import sprite from '../Assets/sprite.svg';
import navbarStyle from './Navbar.module.scss';

import Nav from '../reusable/Nav';

class Header extends Component {
  state = {
    value: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchTerm(this.state.value);
  };

  render() {
    const Navbar = [
      'Home',
      { movie: ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'] },
      { tv: ['Popular', 'Airing Today', 'On Air', 'Top Rated'] }
    ];

    return (
      <header className={navbarStyle.header}>
        <span className={navbarStyle.header__logo}>
          <Link to="/" className={navbarStyle.link}>
            MoviesShows
          </Link>
        </span>
        <nav className={navbarStyle.header__nav}>
          <ul className={navbarStyle.navList}>
            <li className={navbarStyle.listItem}>
              <div className={navbarStyle.nav__search}>
                <form onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    placeholder="Search"
                    className={navbarStyle.nav__input}
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                  />
                  <button>
                    <svg className={navbarStyle.search__icon}>
                      <use xlinkHref={`${sprite}#icon-search`}></use>
                    </svg>
                  </button>
                </form>
              </div>
            </li>
            {Nav(Navbar)}
          </ul>
        </nav>
      </header>
    );
  }
}

export default connect(null, { searchTerm })(Header);
