import React, { useRef } from 'react';

import PropTypes from 'prop-types';

import styles from './FilterParts.module.scss';

function FilterParts({ onSearch, types = [], onSelectType, onSelectOrderPrice }) {
  const searchInputRef = useRef();

  return (
    <>
      <div className={styles.filterContainer}>
        <div>
          <input
            className={styles.selectContainer}
            placeholder="Search"
            type="text"
            ref={searchInputRef}></input>
          <button className={styles.button} onClick={() => onSearch(searchInputRef.current.value)}>
            Search
          </button>
        </div>

        <select
          className={styles.selectContainer}
          defaultValue="Types"
          onChange={(e) => onSelectType(e.target.value)}
          name="types">
          <option value="">Types</option>

          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className={styles.selectContainer}
          defaultValue="Price Order"
          name="priceOrder"
          onChange={(e) => onSelectOrderPrice(e.target.value)}>
          <option disabled>Price Order</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </>
  );
}

FilterParts.propTypes = {
  onSelectOrderPrice: PropTypes.func,
  onSelectType: PropTypes.func,
  types: PropTypes.array,
  onSearch: PropTypes.func
};
export default FilterParts;
