import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label htmlFor="searchInput" className="search__label">
        <ImSearch className="search__icon" />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="유튜브를 검색하세요"
        title="검색"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
