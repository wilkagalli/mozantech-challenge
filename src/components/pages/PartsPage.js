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
      <dl className={styles.partsDetails}>
        <dt>
          <strong>Name:</strong>
        </dt>
        <dd>{query.get('name')}</dd>
        <dt>
          <strong>Type:</strong>
        </dt>
        <dd>{query.get('type')}</dd>
        <dt>
          <strong>Price:</strong>
        </dt>

        <dd>{query.get('price')}</dd>
      </dl>
    </>
  );
}

export default PartsPage;
