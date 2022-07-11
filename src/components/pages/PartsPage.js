import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './PartsPage.module.scss';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function PartsPage() {
  let query = useQuery();
  return (
    <>
      <div className={styles.partsDetails}>
        <h3>PART DETAILS</h3>
        <p>
          <strong>NAME: </strong>
          <span>{query.get('name')}</span>
        </p>
        <p>
          <strong>TYPE: </strong>
          <span>{query.get('type')}</span>
        </p>
        <p>
          <strong>PRICE: </strong>
          <span>{query.get('price')}</span>
        </p>
      </div>
    </>
  );
}

export default PartsPage;
