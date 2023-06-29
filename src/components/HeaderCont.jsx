import React from 'react';
import { Link } from 'react-router-dom';

import { CiYoutube } from 'react-icons/ci';
import { GiMusicalNotes } from 'react-icons/gi';
import { SearchBar } from './';

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
      <SearchBar />
    </header>
  );
};

export default Header;
