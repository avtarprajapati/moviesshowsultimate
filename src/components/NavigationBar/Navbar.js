import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../Assets/sprite.svg';
import navbarStyle from './Navbar.module.scss';

import Nav from '../reusable/Nav';

class Header extends Component {
  render() {
    const Navbar = [
      'Home',
      { movie: ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'] },
      { tv: ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'] }
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
                <input
                  type="text"
                  placeholder="Search"
                  className={navbarStyle.nav__input}
                />
                <svg className={navbarStyle.search__icon}>
                  <use xlinkHref={`${sprite}#icon-search`}></use>
                </svg>
              </div>
            </li>
            {Nav(Navbar)}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
