import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

function Card({ name, type, price }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <p data-testid="card-name"> {name}</p>
        <p data-testid="card-type"> {type} </p>
        <p data-testid="card-price"> {price} </p>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string
};

export default Card;
