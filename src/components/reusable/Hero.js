import React, { Component } from 'react';

import './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__content">
          <h2 className="heading2">{this.props.children[0]}</h2>
          <p>{this.props.children}</p>
        </div>
        {console.log(this.props.children)}
        {/* <form className={homeStyle.form}>
          <input
            type="text"
            className={homeStyle.form__input}
            placeholder="search movies and tv shows"
          />
          <button className={homeStyle.form__button}>
            <svg className={homeStyle.form__icon}>
              <use xlinkHref={`${sprite}#icon-search`}></use>
            </svg>
            Search
          </button>
        </form> */}
      </section>
    );
  }
}
