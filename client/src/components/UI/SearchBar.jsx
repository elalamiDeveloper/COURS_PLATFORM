import { useState } from 'react';
import styled from 'styled-components';

import { BiSearch } from '../../assets/icons';
import { colors } from '../../assets/constants';

const SearchBarContainer = styled.form`
  display: flex;

  .search-input {
    padding: 1rem;
  }

  .btn {
    margin-left: -4.8rem;
    padding: 1rem;
    background: transparent;
    border-radius: 0.5rem;

    .icon {
      font-size: 2.6rem;
      color: ${colors.principalColor700};
    }
  }
`;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValueHandler = (e) => setSearchValue(e.target.value);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <SearchBarContainer onSubmit={searchHandler}>
      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={changeSearchValueHandler}
      />
      <button type="submit" className="btn">
        <BiSearch className="icon" />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
