import React from 'react';
import { Link } from 'react-router-dom';

import { CiYoutube } from 'react-icons/ci';
import { GiMusicalNotes } from 'react-icons/gi';

const Header = (props) => {
  return (
    <header id="header" className={props.attr}>
      <h1 className="logo">
        <Link to="/">
          HoongTube
          <GiMusicalNotes className="icon2" />
          <CiYoutube className="icon" />
        </Link>
      </h1>
      <div className="search">
        <label htmlFor="" className="glass"></label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="듣고 싶은 음악의 장르를 검색하세요"
          title="검색"
        />
      </div>
    </header>
  );
};

export default Header;
