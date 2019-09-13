import React from 'react';
import './search-box.styles.css';
import PropTypes from 'prop-types';

const SearchBox = props => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder='Search Monsters'
      onChange={props.onSearchChange}
    />
  );
}

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBox;