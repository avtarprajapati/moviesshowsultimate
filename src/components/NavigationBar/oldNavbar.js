import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../Assets/sprite.svg';
import HeaderStyle from './Navbar.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={HeaderStyle.header}>
        <span className={HeaderStyle.header__logo}>
          <Link to="/" className={HeaderStyle.link}>
            MoviesShows
          </Link>
        </span>
        <nav className={HeaderStyle.header__nav}>
          <ul className={HeaderStyle.navList}>
            <li className={HeaderStyle.listItem}>
              <div className={HeaderStyle.nav__search}>
                <input
                  type="text"
                  placeholder="Search"
                  className={HeaderStyle.nav__input}
                />
                <svg className={HeaderStyle.search__icon}>
                  <use xlinkHref={`${sprite}#icon-search`}></use>
                </svg>
              </div>
            </li>
            <li className={HeaderStyle.listItem}>
              <Link to="/" className={HeaderStyle.link}>
                Home
              </Link>
            </li>
            <li className={HeaderStyle.listItem}>
              <Link to="/movies/popular" className={HeaderStyle.link}>
                Movies
              </Link>
              <div className={HeaderStyle.menu}>
                <ul className={HeaderStyle.menu__movies}>
                  <li>
                    <Link to="/movies/popular" className={HeaderStyle.link}>
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link to="/movies/toprated" className={HeaderStyle.link}>
                      Top Rated
                    </Link>
                  </li>
                  <li>
                    <Link to="/movies/upcoming" className={HeaderStyle.link}>
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link to="/movies/nowplay" className={HeaderStyle.link}>
                      Now Playing
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={HeaderStyle.listItem}>
              <Link to="/tv/popular" className={HeaderStyle.link}>
                TV Shows
              </Link>
              <div className={HeaderStyle.menu}>
                <ul className={HeaderStyle.menu__movies}>
                  <li>
                    <Link to="/movies/popular" className={HeaderStyle.link}>
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link to="/movies/toprated" className={HeaderStyle.link}>
                      Top Rated
                    </Link>
                  </li>
                  <li>
                    <Link to="/movies/upcoming" className={HeaderStyle.link}>
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link to="/movies/nowplay" className={HeaderStyle.link}>
                      Now Playing
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
