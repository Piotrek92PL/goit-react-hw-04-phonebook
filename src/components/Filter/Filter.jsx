import React from 'react';

function Filter({ filter, handleFilterChange }) {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Szukaj kontaktów..."
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter;
