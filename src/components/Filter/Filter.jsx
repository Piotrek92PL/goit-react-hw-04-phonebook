import React, { Component } from 'react';
class Filter extends Component {
  render() {
    const { filter, handleFilterChange } = this.props;

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
}

export default Filter;  