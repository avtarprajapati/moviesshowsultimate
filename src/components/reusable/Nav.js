import React from 'react';
import { Link } from 'react-router-dom';

import NavStyle from './Nav.module.scss';

const subMenu = (subMenuArr) => {
  return subMenuArr.map((menu, i) => (
    <li key={i}>
      <Link
        to={`/movies/${menu.toLowerCase().split(' ').join('')}`}
        className={NavStyle.link}
      >
        {menu}
      </Link>
    </li>
  ));
};

const renderNav = (item, i) => {
  if (typeof item !== 'object') {
    return (
      <li key={i} className={NavStyle.listItem}>
        <Link to="/" className={NavStyle.link}>
          {item.toUpperCase()}
        </Link>
      </li>
    );
  }

  const mainNav = Object.keys(item);
  const subArr = Object.values(item).flat();
  return (
    <li key={i} className={NavStyle.listItem}>
      <Link to={`/${mainNav}/popular`} className={NavStyle.link}>
        {mainNav.join().toUpperCase()}
      </Link>
      <div className={NavStyle.menu}>
        <ul>{subMenu(subArr)}</ul>
      </div>
    </li>
  );
};

const Nav = (arr) => {
  return arr.map(renderNav);
};

export default Nav;
